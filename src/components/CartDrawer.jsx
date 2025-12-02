import React, { useMemo, useState } from 'react';
import { Terminal, Wind, X, Zap } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Reuse existing PUBLISHABLE key from env
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CartDrawer = ({ cart, isOpen, setIsOpen, removeFromCart }) => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const total = useMemo(
        () => cart.reduce((acc, item) => acc + Number(item.price || 0), 0).toFixed(2),
        [cart]
    );

    if (!isOpen) return null;

    const handleSecureCheckout = async () => {
        if (!cart.length) return;
        setIsCheckingOut(true);
        try {
            const stripe = await stripePromise;
            if (!stripe) {
                console.error('Stripe failed to initialize');
                setIsCheckingOut(false);
                return;
            }

            const response = await fetch('/api/create-checkout-session.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cart.map((item) => ({
                        id: item.id,
                        quantity: 1
                    }))
                })
            });

            if (!response.ok) {
                console.error('Failed to create checkout session', await response.text());
                setIsCheckingOut(false);
                return;
            }

            const session = await response.json();
            const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
            if (error) {
                console.error('Stripe redirect error', error);
            }
        } catch (err) {
            console.error('Secure checkout error', err);
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[60] flex justify-end bg-stone-900/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="w-full max-w-md bg-[#e8e6e1] h-full shadow-2xl flex flex-col border-l-2 border-stone-900 font-mono"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4 border-b border-stone-900 flex justify-between items-center bg-stone-900 text-white">
                    <h2 className="font-bold text-sm uppercase flex items-center gap-2">
                        <Terminal size={14} /> REQUISITION_LOG
                    </h2>
                    <button onClick={() => setIsOpen(false)}><X size={18} /></button>
                </div>

                {/* Persistence Simulator */}
                <div className="bg-stone-800 text-xs text-stone-400 p-2 flex items-center gap-2 border-b border-stone-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    SYNCING TO OFFLINE NODE...
                </div>

                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center text-stone-400 mt-20 flex flex-col items-center">
                            <Wind className="w-12 h-12 mb-4 opacity-50" />
                            <p className="text-xs">BUFFER_EMPTY</p>
                        </div>
                    ) : (
                        cart.map((item, idx) => (
                            <div
                                key={`${item.id}-${idx}`}
                                className="bg-white p-3 border border-stone-300 shadow-[2px_2px_0px_0px_rgba(28,25,23,0.5)] flex justify-between items-start"
                            >
                                <div>
                                    <p className="text-[10px] font-bold text-stone-400">{item.id}</p>
                                    <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                                    <div className="flex gap-2 mt-1">
                                        {item.specs && item.specs.slice(0, 2).map(s => (
                                            <span key={s} className="text-[9px] bg-stone-100 px-1">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">${item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(idx)}
                                        className="text-[10px] text-red-600 hover:bg-red-50 px-1 mt-1 uppercase"
                                    >
                                        [ DELETE ]
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-stone-300 bg-white space-y-4">
                    <div className="flex justify-between items-end">
                        <span className="text-xs text-stone-500">TOTAL_COST</span>
                        <span className="text-2xl font-black">${total}</span>
                    </div>
                    <button
                        onClick={handleSecureCheckout}
                        disabled={isCheckingOut || !cart.length}
                        className="w-full bg-stone-900 text-white font-bold py-4 hover:bg-stone-800 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center gap-2 uppercase text-sm group"
                    >
                        <Zap size={16} className="group-hover:text-yellow-400 transition-colors" />
                        {isCheckingOut ? 'Processing...' : 'Secure_Checkout'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;


