import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// PRICE_MAP: Replace placeholder Price IDs with actual Stripe Price IDs from your Stripe dashboard
const PRICE_MAP = {
  'WLK-MN-PRO': 'price_wlk_mn_pro', // Replace with real Stripe Price ID
  'WLK-MN-LITE': 'price_wlk_mn_lite', // Replace with real Stripe Price ID
  'AFF-HELTEC-V3': 'price_aff_heltec_v3', // Replace with real Stripe Price ID
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cart, customer_email } = req.body; // Assuming you pass cart from frontend

    const line_items = cart.map((item) => {
      // DYNAMIC CUSTOM PARTS: price_data for one-offs
      if (item.id === 'CUST_PART') {
        return {
          quantity: item.quantity || 1,
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name, // e.g., "Printed grip_v4.stl (45.2cm³)"
              description: item.description, // e.g., "STL: https://blob.vercel... (download for Bambu A1)"
              images: [], // Optional: Add [item.image_url] if you gen thumbnails
            },
            unit_amount: Math.round(item.price * 100), // Cents: $12.75 → 1275
            tax_behavior: 'exclusive', // Or 'inclusive' per your tax setup
          },
        };
      }

      // STATIC PRODUCTS: Use predefined Price IDs (your existing map)
      // Assuming you have a PRICE_MAP like { 'WLK-MN-PRO': 'price_abc123', ... }
      const priceId = PRICE_MAP[item.id]; // Or direct item.price_id if stored
      if (!priceId) {
        throw new Error(`Unknown product id: ${item.id}`);
      }
      return {
        price: priceId,
        quantity: item.quantity || 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      customer_email, // Optional: Pre-fill email
      metadata: { cart: JSON.stringify(cart) }, // For fulfillment (e.g., email STL URLs)
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
}