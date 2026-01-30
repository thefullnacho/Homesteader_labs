import React from 'react';
import { FileText, Unlock, Cpu, ChevronRight } from 'lucide-react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className={`group border-2 border-stone-900 bg-white hover:shadow-brutalist-lg transition-all duration-200 flex flex-col h-full relative p-1`}>
        <div className="absolute top-0 right-0 p-1">
            <div className="w-2 h-2 border border-stone-900 rounded-full bg-transparent group-hover:bg-green-500 transition-colors"></div>
        </div>

        <div className="h-48 bg-stone-100 border-b border-stone-900 relative overflow-hidden p-4 flex items-center justify-center">
            <div className="absolute top-2 left-2 text-[10px] font-bold bg-white border border-stone-900 px-1 z-10">
                {product.id}
            </div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>

            <div className="w-24 h-24 border border-dashed border-stone-400 rounded-full flex items-center justify-center bg-white z-10 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">
                {product.category === 'DIGITAL' ? <FileText size={40} className="text-stone-800" /> : product.category === 'ZERO_DAY' ? <Unlock size={40} className="text-red-600" /> : <Cpu size={40} className="text-stone-800" />}
            </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-none w-2/3">{product.name}</h3>
                <span className="font-bold text-stone-900 bg-stone-200 px-1 text-sm">${product.price}</span>
            </div>
            <p className="text-xs text-stone-600 mb-4 flex-grow leading-relaxed">{product.description}</p>

            <div className="space-y-2 mt-auto">
                <div className="flex flex-wrap gap-1">
                    {product.specs.map(s => (
                        <span key={s} className="text-[9px] border border-stone-300 px-1 text-stone-500">{s}</span>
                    ))}
                </div>
                {product.category === 'AFFILIATE' ? (
                    <button
                        onClick={() => window.open(product.affiliate.url, '_blank')}
                        className="w-full mt-4 border border-stone-900 text-xs font-bold py-2 flex justify-center items-center gap-2 uppercase transition-colors bg-stone-900 text-white hover:bg-stone-700"
                    >
                        EXTERNAL_LINK <ChevronRight size={12} />
                    </button>
                ) : (
                    <button
                        onClick={() => addToCart(product)}
                        className={`w-full mt-4 border border-stone-900 text-xs font-bold py-2 flex justify-center items-center gap-2 uppercase transition-colors bg-transparent text-stone-900 hover:bg-stone-900 hover:text-white active:bg-stone-700`}
                    >
                        <>Add_To_Cart <ChevronRight size={12} /></>
                    </button>
                )}
            </div>
        </div>
    </div>
    );
};

export default ProductCard;
