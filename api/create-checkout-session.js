import Stripe from 'stripe';

export const config = {
    runtime: 'edge',
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

export default async function handler(request) {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { items } = await request.json();
        if (!Array.isArray(items) || items.length === 0) {
            return new Response(JSON.stringify({ error: 'No items provided' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const url = new URL(request.url);
        const origin = url.origin;

        // Fetch product data from the public JSON to resolve prices
        const productsRes = await fetch(`${origin}/data/products.json`, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (!productsRes.ok) {
            throw new Error(`Failed to load products.json: ${productsRes.status}`);
        }

        const products = await productsRes.json();

        const line_items = items.map(({ id, quantity }) => {
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
                quantity: quantity || 1,
            };
        });

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items,
            success_url: `${origin}/?success=true`,
            cancel_url: `${origin}/?canceled=true`,
        });

        return new Response(JSON.stringify({ id: session.id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Stripe checkout session error', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


