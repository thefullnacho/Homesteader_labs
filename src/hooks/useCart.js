import { useState, useEffect } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Initial Load Cart & Handle Stripe Success
    useEffect(() => {
        const savedCart = localStorage.getItem('homesteader_cart');
        if (savedCart) setCart(JSON.parse(savedCart));

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            setCart([]);
            localStorage.removeItem('homesteader_cart');
            alert(">> UPLINK CONFIRMED: REQUISITION_SUCCESSFUL. CHECK EMAIL FOR LOGISTICS.");
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    // Save Cart
    useEffect(() => {
        localStorage.setItem('homesteader_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => {
            const newCart = [...prevCart];
            newCart.splice(index, 1);
            return newCart;
        });
    };

    return {
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart
    };
};

export default useCart;
