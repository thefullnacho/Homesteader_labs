import React from 'react';

const Manifesto = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10">
            <div className="mb-8 border-l-4 border-stone-900 pl-4 py-2">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Manifesto<br />_V.1.0</h1>
                <p className="text-xs mt-2 max-w-lg text-stone-500 uppercase">
                // Homesteader Labs Core Philosophy<br />
                // Established 2024
                </p>
            </div>
            
            <div className="space-y-8 text-stone-900 font-mono leading-relaxed">
                 <div className="border-t border-stone-300 pt-4">
                    <h2 className="text-xl font-bold uppercase mb-4">[ 01 ] // THE MISSION</h2>
                    <p className="mb-4">
                        We believe in self-reliance through technology. Not the technology that tracks you, serves you ads, or locks you into a subscription ecosystem. We build tools for the makers, the growers, and the builders who want to own their infrastructure.
                    </p>
                </div>

                <div className="border-t border-stone-300 pt-4">
                    <h2 className="text-xl font-bold uppercase mb-4">[ 02 ] // OPEN SYSTEMS</h2>
                    <p className="mb-4">
                        Closed systems are dead systems. If you can't open it, you don't own it. We provide schematics, source code, and the right to repair. Our hardware is designed to be hacked, modified, and improved by the community.
                    </p>
                </div>

                <div className="border-t border-stone-300 pt-4">
                    <h2 className="text-xl font-bold uppercase mb-4">[ 03 ] // PRIVACY FIRST</h2>
                    <p className="mb-4">
                        In an age of surveillance capitalism, we choose the dark. Our devices operate offline by default. They don't phone home unless you tell them to. Your data belongs to you, on your local network, on your own terms.
                    </p>
                </div>
                
                 <div className="border-t border-stone-300 pt-4">
                    <h2 className="text-xl font-bold uppercase mb-4">[ 04 ] // BUILT TO LAST</h2>
                    <p className="mb-4">
                        Planned obsolescence is an insult to engineering. We design for durability, utilizing robust materials and modular components. We build for the long haul, for the homestead that stands for generations.
                    </p>
                </div>
            </div>
             <div className="mt-12 border-2 border-stone-900 p-6 text-center">
                <p className="font-bold uppercase text-sm mb-2">JOIN THE RESISTANCE</p>
                <p className="text-xs text-stone-600">BUILD. GROW. SURVIVE.</p>
            </div>
        </div>
    );
};

export default Manifesto;
