import React from 'react';
import ProductCard from '../components/ProductCard';

const ShopView = ({ products, addToCart }) => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
            <div className="flex justify-between items-end mb-8 border-b-2 border-stone-900 pb-2 bg-white/50 dark:bg-stone-900/50 p-4">
                <h2 className="text-2xl font-bold uppercase">Hardware_Index</h2>
                <div className="text-[10px] text-stone-500 text-right">
                    <p>DATABASE_V.4.2</p>
                    <p>RECORDS_FOUND: {products.length}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(p => (
                    <ProductCard key={p.id} product={p} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ShopView;
