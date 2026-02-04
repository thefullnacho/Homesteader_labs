import React from 'react';
import ProductCard from '../components/ProductCard';

const ShopView = ({ products, addToCart }) => {
    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10 text-theme-main">
            <div className="flex justify-between items-end mb-8 border-b-2 border-theme-main pb-2 bg-theme-sub/50 p-4 relative">
                <h2 className="text-2xl font-bold uppercase">Hardware_Index</h2>
                
                {/* Marginalia Note */}
                <div className="marginalia hidden md:block" style={{ top: '-30px', left: '200px', transform: 'rotate(-1deg)' }}>
                    V0.4 battery dies in 20 mins at these temps. Need better insulation.
                </div>

                <div className="text-[10px] text-theme-sub text-right">
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
