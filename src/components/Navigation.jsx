import React, { useState } from 'react';
import { Box, Sun, Moon } from 'lucide-react';

const Navigation = ({ setView, cartCount, currentView, isDark, toggleDarkMode, toggleTerminal }) => {
    const [clickCount, setClickCount] = useState(0);
    const [lastClick, setLastClick] = useState(0);

    const handleLogoTouch = () => {
        const now = Date.now();
        if (now - lastClick < 500) {
            const newCount = clickCount + 1;
            if (newCount >= 2) { // 3 clicks total (0, 1, 2)
                toggleTerminal();
                setClickCount(0);
            } else {
                setClickCount(newCount);
            }
        } else {
            setClickCount(0);
        }
        setLastClick(now);
    };

    return (
        <nav className="border-b-2 border-theme-main bg-theme-main text-theme-main sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div
                    onClick={() => { setView('HOME'); handleLogoTouch(); }}
                    className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2 group select-none"
                >
                    <div className="w-8 h-8 bg-[var(--accent)] text-white flex items-center justify-center group-hover:invert transition-all">
                        <Box size={20} />
                    </div>
                    <span className="hidden sm:inline">HOMESTEADER_LABS</span>
                    <span className="sm:hidden">HL_SYS</span>
                </div>

                <div className="hidden md:flex gap-6 text-sm items-center">
                    <button
                        onClick={() => setView('SHOP')}
                        className={`dymo-label ${currentView === 'SHOP' ? 'brightness-150 border-[var(--accent)]' : 'opacity-80 hover:opacity-100'}`}
                    >
                        SHOP
                    </button>

                    <a
                        href="https://archive.homesteaderlabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dymo-label opacity-80 hover:opacity-100 cursor-pointer"
                    >
                        ARCHIVE
                    </a>

                    {['FABRICATION', 'WEATHER'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setView(item)}
                            className={`dymo-label ${currentView === item ? 'brightness-150 border-[var(--accent)]' : 'opacity-80 hover:opacity-100'}`}
                        >
                            {item}
                        </button>
                    ))}
                    
                    <button 
                        onClick={(e) => { e.preventDefault(); toggleDarkMode(); }}
                        className="p-2 border border-theme-main hover:bg-[var(--accent)] hover:text-white transition-all ml-4"
                        title="TOGGLE_THEME"
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setView('CART')}
                        className="flex items-center gap-2 border border-theme-main px-3 py-1 hover:bg-[var(--accent)] hover:text-white transition-colors"
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
                <button
                    onClick={() => setView('SHOP')}
                    className={`${currentView === 'SHOP' ? 'text-theme-main underline decoration-2' : 'text-theme-sub'}`}
                >
                    SHOP
                </button>
                <a
                    href="https://archive.homesteaderlabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-sub hover:text-theme-main"
                >
                    ARCHIVE
                </a>
                {['FABRICATION', 'WEATHER'].map((item) => (
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
};

export default Navigation;
