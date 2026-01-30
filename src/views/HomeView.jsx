import React from 'react';

const HomeView = ({ setView }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
            <div className="max-w-5xl w-full border-2 border-theme-main p-8 md:p-20 bg-theme-main/90 backdrop-blur-sm shadow-brutalist-lg relative">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-theme-main"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-theme-main"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-theme-main"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-theme-main"></div>

                <div className="absolute top-4 left-4 text-[9px] border border-theme-main opacity-50 px-1 text-theme-main uppercase">
                    Sys_Ready
                </div>
                <div className="absolute top-4 right-4 flex gap-2 items-center">
                    <span className="text-[9px] text-theme-main opacity-50">BIOSYNTH_MONITOR</span>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-theme-main">
                    HOMESTEADER<br />LABS
                </h1>
                <div className="w-full h-px bg-theme-main opacity-20 my-6"></div>
                <p className="text-sm md:text-base max-w-2xl mx-auto mb-10 text-theme-main opacity-80 uppercase tracking-wide">
                    &gt;&gt; Empowering homesteaders to build self-reliance with offline, personal<br />
                    privacy-first tech fusing old-world grit and simplicity<br />
                    with modern AI.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <button
                        onClick={() => setView('SHOP')}
                        className="bg-stone-900 text-white px-8 py-4 font-bold hover:bg-stone-700 transition-all text-sm uppercase tracking-widest"
                    >
                        Browse_Hardware
                    </button>
                    <button
                        onClick={() => setView('FABRICATION')}
                        className="bg-transparent text-theme-main px-8 py-4 font-bold hover:bg-stone-100 hover:text-stone-900 transition-all border border-theme-main text-sm uppercase tracking-widest"
                    >
                        Upload_Schematic
                    </button>
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
