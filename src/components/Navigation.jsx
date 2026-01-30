import React from 'react';
import { Box, Sun, Moon } from 'lucide-react';

const Navigation = ({ setView, cartCount, currentView, isDark, toggleDarkMode }) => (
    <nav className="border-b-2 border-theme-main bg-theme-main text-theme-main sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div
                onClick={() => setView('HOME')}
                className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2 group"
            >
                <div className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center group-hover:invert transition-all">
                    <Box size={20} />
                </div>
                <span className="hidden sm:inline">HOMESTEADER_LABS</span>
                <span className="sm:hidden">HL_SYS</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm items-center">
                {['SHOP', 'ARCHIVE', 'FABRICATION', 'WEATHER'].map((item) => (
                    <button
                        key={item}
                        onClick={() => setView(item)}
                        className={`hover:bg-stone-900 hover:text-white px-2 py-1 transition-colors uppercase ${currentView === item ? 'bg-stone-900 text-white' : ''}`}
                    >
                        {`[ ${item} ]`}
                    </button>
                ))}
                
                <button 
                    onClick={(e) => { e.preventDefault(); toggleDarkMode(); }}
                    className="p-2 border border-theme-main hover:bg-stone-900 hover:text-white transition-all"
                    title="TOGGLE_THEME"
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setView('CART')}
                    className="flex items-center gap-2 border border-theme-main px-3 py-1 hover:bg-stone-900 hover:text-white transition-colors"
                >
                    <span className="text-xs">CART:</span>
                    <span className="font-bold">{cartCount.toString().padStart(2, '0')}</span>
                </button>

                <button 
                    onClick={(e) => { e.preventDefault(); toggleDarkMode(); }}
                    className="md:hidden p-1 border border-theme-main"
                >
                    {isDark ? <Sun size={14} /> : <Moon size={14} />}
                </button>
            </div>
        </div>
        <div className="md:hidden flex justify-around border-t border-theme-main py-2 bg-theme-sub text-xs">
            {['SHOP', 'ARCHIVE', 'FABRICATION', 'WEATHER'].map((item) => (
                <button
                    key={item}
                    onClick={() => setView(item)}
                    className={`${currentView === item ? 'text-theme-main underline decoration-2' : 'text-theme-sub'}`}
                >
                    {item}
                </button>
            ))}
        </div>
    </nav>
);

export default Navigation;
