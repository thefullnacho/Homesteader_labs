import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items } = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided' });
    }

    const origin = req.headers.origin || 'http://localhost:3000';
    // Fetch product catalog to resolve USD prices
    const productsRes = await fetch(`${origin}/data/products.json`);
    if (!productsRes.ok) {
      throw new Error(`Failed to load products.json: ${productsRes.status}`);
    }
    const products = await productsRes.json();

    const line_items = items.map(({ id, quantity = 1 }) => {
      const product = products.find((p) => p.id === id);
      if (!product) {
        throw new Error(`Unknown product id: ${id}`);
      }
      const unitAmount = Math.round(Number(product.price) * 100);
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: unitAmount,
        },
        quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
    });

    res.status(200).json({ url: session.url });  // Return URL, not id
  } catch (error) {
    console.error('Stripe checkout session error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}