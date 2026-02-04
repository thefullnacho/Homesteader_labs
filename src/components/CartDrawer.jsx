import React, { useMemo, useState } from 'react';
import { Terminal, Wind, X, Zap } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const CartDrawer = ({ cart, isOpen, setIsOpen, removeFromCart }) => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const total = useMemo(
        () => cart.reduce((acc, item) => acc + Number(item.price || 0), 0).toFixed(2),
        [cart]
    );

    if (!isOpen) return null;

    const handleSecureCheckout = async () => {
        if (cart.length === 0) return;

        setIsCheckingOut(true);
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cart, // ← CHANGED: Send full cart array (w/ id, name, price, desc for CUST_PART)
                    customer_email: undefined // ← OPTIONAL: Pull from form/state (e.g., email input)
                }),
            });

            if (!response.ok) {
                throw new Error('Checkout failed');
            }

            const { sessionId } = await response.json(); // ← CHANGED: Expect { sessionId } not { url }

            // Stripe.js redirect (loads in new tab/overlay—your brutalist overlay? Swap to <StripeElements> if embedded)
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // ← Ensure this is loaded (head script or import)
            await stripe.redirectToCheckout({ sessionId }); // ← NEW: Client-side redirect w/ sessionId

            // Optional: Clear cart on success (webhook confirms later for prod)
            // setCart([]);

        } catch (error) {
            console.error('Checkout error:', error);
            // Brutalist toast? addLog('ERR: CHECKOUT_FAILED');
        } finally {
            setIsCheckingOut(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[60] flex justify-end bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="w-full max-w-md bg-[var(--bg-primary)] h-full shadow-2xl flex flex-col border-l-2 border-theme-main font-mono transition-colors duration-300"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4 border-b border-theme-main flex justify-between items-center bg-[var(--bg-secondary)] text-theme-main">
                    <h2 className="font-bold text-sm uppercase flex items-center gap-2">
                        <Terminal size={14} /> REQUISITION_LOG
                    </h2>
                    <button onClick={() => setIsOpen(false)} className="hover:text-[var(--accent)]"><X size={18} /></button>
                </div>

                {/* Persistence Simulator */}
                <div className="bg-[#1b2612] text-xs text-theme-sub p-2 flex items-center gap-2 border-b border-theme-main/10">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></div>
                    SYNCING TO OFFLINE NODE...
                </div>

                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center text-theme-sub mt-20 flex flex-col items-center">
                            <Wind className="w-12 h-12 mb-4 opacity-50" />
                            <p className="text-xs">BUFFER_EMPTY</p>
                        </div>
                    ) : (
                        cart.map((item, idx) => (
                            <div
                                key={`${item.id}-${idx}`}
                                className="bg-theme-sub p-3 border border-theme-main/20 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] flex justify-between items-start"
                            >
                                <div>
                                    <p className="text-[10px] font-bold text-theme-sub opacity-50">{item.id}</p>
                                    <h4 className="font-bold text-sm uppercase text-theme-main">{item.name}</h4>
                                    <div className="flex gap-2 mt-1">
                                        {item.specs && item.specs.slice(0, 2).map(s => (
                                            <span key={s} className="text-[9px] border border-theme-main/20 text-theme-sub px-1">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm text-theme-main">${item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(idx)}
                                        className="text-[10px] text-red-600 hover:bg-red-950/20 px-1 mt-1 uppercase"
                                    >
                                        [ DELETE ]
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-theme-main bg-theme-sub space-y-4">
                    <div className="flex justify-between items-end text-theme-main">
                        <span className="text-xs opacity-60">TOTAL_COST</span>
                        <span className="text-2xl font-black">${total}</span>
                    </div>
                    <button
                        onClick={handleSecureCheckout}
                        disabled={isCheckingOut || !cart.length}
                        className="w-full bg-[var(--accent)] text-white font-bold py-4 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center gap-2 uppercase text-sm group transition-all"
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


