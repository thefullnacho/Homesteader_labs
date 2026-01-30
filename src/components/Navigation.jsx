import React from 'react';
import { Box } from 'lucide-react';

const Navigation = ({ setView, cartCount, currentView }) => (
    <nav className="border-b-2 border-stone-900 bg-[#e8e6e1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div
                onClick={() => setView('HOME')}
                className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2 group"
            >
                <div className="w-8 h-8 bg-stone-900 text-[#e8e6e1] flex items-center justify-center group-hover:invert transition-all">
                    <Box size={20} />
                </div>
                <span className="hidden sm:inline">HOMESTEADER_LABS</span>
                <span className="sm:hidden">HL_SYS</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm">
                {['SHOP', 'ARCHIVE', 'FABRICATION', 'WEATHER'].map((item) => (
                    <button
                        key={item}
                        onClick={() => setView(item)}
                        className={`hover:bg-stone-900 hover:text-white px-2 py-1 transition-colors uppercase ${currentView === item ? 'bg-stone-900 text-white' : ''}`}
                    >
                        {`[ ${item} ]`}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setView('CART')}
                className="flex items-center gap-2 border border-stone-900 px-3 py-1 hover:bg-stone-900 hover:text-white transition-colors"
            >
                <span className="text-xs">CART:</span>
                <span className="font-bold">{cartCount.toString().padStart(2, '0')}</span>
            </button>
        </div>
        <div className="md:hidden flex justify-around border-t border-stone-900 py-2 bg-stone-200 text-xs">
            {['SHOP', 'ARCHIVE', 'FABRICATION', 'WEATHER'].map((item) => (
                <button
                    key={item}
                    onClick={() => setView(item)}
                    className={`${currentView === item ? 'text-stone-900 underline decoration-2' : 'text-stone-600'}`}
                >
                    {item}
                </button>
            ))}
        </div>
    </nav>
);

export default Navigation;
