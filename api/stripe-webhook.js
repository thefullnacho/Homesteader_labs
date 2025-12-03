import Stripe from 'stripe';
import emailjs from '@emailjs/nodejs';  // Server SDK

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };  // Raw body for sig

export default async function handler(req, res) {  // Async locked
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook sig fail:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customer_email = session.customer_email || 'relay@homesteaderlabs.com';
    const orderId = session.id;
    const total = (session.amount_total / 100).toFixed(2);

    // Enrich line_items (descs for STLs, material from name) — AWAITED
    const items = await stripe.checkout.sessions.listLineItems(session.id);
    const enrichedItems = await Promise.all(  // ← FIX: Unwrap async map
      items.data.map(async (item) => {
        const desc = item.description || '';
        let name = item.description || 'Custom';
        try {
          if (item.price?.id) {  // Static Price ID?
            const priceObj = await stripe.prices.retrieve(item.price.id);
            name = priceObj.product.name || name;
          }
        } catch (priceErr) {
          console.warn('Price retrieve skip:', priceErr.message);  // Graceful if no ID
        }
        const volumeMatch = name.match(/\((\d+\.?\d*)cm³/);  // From cart name
        const materialMatch = name.match(/,\s*(\w+)\)/);  // e.g., ", PLA)"
        return {
          name,
          price: (item.amount_total / 100).toFixed(2),
          description: desc.includes('STL:') ? desc : '',  // Only if STL
          volume: volumeMatch?.[1] || 'N/A',
          material: materialMatch?.[1] || 'PLA'
        };
      })
    );

    // Light metadata (char-safe) — Now resolved
    const stlUrls = enrichedItems
      .filter(i => i.description)
      .map(i => i.description.split('STL: ')[1] || '')
      .join(',');

    console.log('Enriched Items:', enrichedItems);  // Debug: See parsed (e.g., {name: 'Printed CASE... (12.8cm³, PLA)', ...})

    // Email to buyer
    await emailjs.send({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      template_params: {
        order_id: orderId,
        customer_email,
        total_amount: total,
        line_items: JSON.stringify(enrichedItems)  // Now real objects—template loops clean
      },
      user_id: process.env.EMAILJS_PRIVATE_KEY  // Server auth
    }).then(() => console.log('Buyer relayed:', orderId))
      .catch(err => console.error('Buyer email err:', err));

    // CC you for queue: Same template, but dynamic "to_email" param
    const queueEmail = process.env.QUEUE_EMAIL || 'yourfallback@homesteaderlabs.com';  // Your queue addr
    await emailjs.send({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,  // Same template
      template_params: {  // Spread buyer params + override to_email
        order_id: orderId,
        customer_email,
        total_amount: total,
        line_items: JSON.stringify(enrichedItems),  // Resolved
        to_email: queueEmail  // Dynamic recipient (template refs {{to_email}})
      },
      user_id: process.env.EMAILJS_PRIVATE_KEY
    }).then(() => console.log('Queue CC relayed:', orderId))
      .catch(err => console.error('Queue email err:', err));

    console.log('Webhook complete:', { orderId, stlUrls });
  }

  res.json({ received: true });
}