import React from 'react';

const HomeView = ({ setView }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center pt-12 md:pt-0">
            <div className="max-w-5xl w-full bg-theme-sub field-station-box terminal-container p-8 md:p-20 backdrop-blur-sm shadow-brutalist-lg relative mt-8 md:mt-0 border-none">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-theme-main opacity-30"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-theme-main opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-theme-main opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-theme-main opacity-30"></div>

                <div className="absolute top-4 left-4 flex flex-col items-start gap-1">
                    <div className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
                        <span className="text-[9px] text-theme-main opacity-60">HUMIDITY: 97%</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
                        <span className="text-[9px] text-theme-main opacity-60">CONDENSATION_RISK: CRITICAL</span>
                    </div>
                </div>
                
                <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
                    <div className="flex gap-2 items-center">
                        <span className="text-[9px] text-theme-main opacity-50">ROOT_INTRUSION: 17%</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-600 animate-pulse"></div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="text-[9px] text-theme-main opacity-50">HARDWARE_INTEGRITY: DEGRADING</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-theme-main whitespace-nowrap mt-24 sm:mt-0">
                    HOMESTEADER LABS
                </h1>
                <div className="w-full h-px bg-theme-main opacity-20 my-6"></div>
                <p className="text-sm md:text-base max-w-2xl mx-auto mb-10 text-theme-main opacity-80 uppercase tracking-wide">
                    &gt;&gt; Salvaged terminal connection active...<br />
                    &gt;&gt; Fusing old-world grit with modern utility.<br />
                    &gt;&gt; Offline-first. Privacy-first. Nature-first.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 relative">
                    {/* Marginalia Note 1 */}
                    <div className="marginalia hidden md:block" style={{ top: '-40px', left: '-20px', transform: 'rotate(-4deg)' }}>
                        Snow has buried sector 6 node. Do NOT try to clear it until the ice melts.
                    </div>
                    
                    <button
                        onClick={() => setView('SHOP')}
                        className="bg-[var(--accent)] text-white px-8 py-4 font-bold hover:brightness-110 transition-all text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                    >
                        Browse_Hardware
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setView('FABRICATION')}
                            className="bg-transparent text-theme-main px-8 py-4 font-bold hover:bg-[var(--accent)] hover:text-white transition-all border-2 border-theme-main text-sm uppercase tracking-widest"
                        >
                            Upload_Schematic
                        </button>
                         {/* Marginalia Note 2 */}
                        <div className="marginalia hidden md:block w-48" style={{ bottom: '-60px', right: '-40px', transform: 'rotate(2deg)', color: 'var(--text-secondary)' }}>
                           Hailo-8 heat sync is the only thing keeping this desk warm tonight.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
                {['AUTHENTIC', 'SIMPLE', 'FUNCTIONAL', 'ESSENTIAL'].map((w, i) => (
                    <div key={w} className="border-t border-theme-main opacity-60 pt-2 text-[10px] tracking-[0.2em] text-center text-theme-main">
                        0{i + 1} // {w}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeView;
