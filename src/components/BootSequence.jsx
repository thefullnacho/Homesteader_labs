import React, { useState, useEffect, useRef } from 'react';

const BootSequence = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const bottomRef = useRef(null);

    const bootLines = [
        { text: "BIOS_CHECK... OK", delay: 100 },
        { text: "LOADING KERNEL: HOMESTEADER_V4.2.0", delay: 300 },
        { text: "MOUNTING FILE SYSTEM... [RW]", delay: 600 },
        { text: "CHECKING MEMORY INTEGRITY... 64MB OK", delay: 900 },
        { text: "INITIATING GRAPHICS DRIVER (3D_LIDAR)", delay: 1200 },
        { text: "ESTABLISHING SECURE CONNECTION...", delay: 1800 },
        { text: "PING: WATERFORD_NODE (12ms)", delay: 2000 },
        { text: "LOADING ASSETS: [####################] 100%", delay: 2400 },
        { text: "ESTABLISHING UPLINK TO ARCHIVE NODE...", delay: 2600 },
        { text: "STARTING BIOSYNTHESIS MONITOR...", delay: 2800 },
        { text: "SYSTEM READY.", delay: 3100 },
        { text: "EXECUTING GUI...", delay: 3400 },
    ];

    useEffect(() => {
        // Persist boot state immediately on mount so refreshes skip it
        localStorage.setItem('homesteader_booted', 'true');

        let timeouts = [];
        bootLines.forEach((line) => {
            const timeout = setTimeout(() => {
                setLogs(prev => [...prev, line.text]);
            }, line.delay);
            timeouts.push(timeout);
        });
        const finishTimeout = setTimeout(onComplete, 3800);
        return () => { timeouts.forEach(clearTimeout); clearTimeout(finishTimeout); };
    }, []);

    useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'auto' }); }, [logs]);

    return (
        <div className="fixed inset-0 z-[100] bg-[#0c0c0c] text-green-600 font-mono text-xs p-4 flex flex-col justify-end overflow-hidden">
            <div className="absolute top-4 left-4 border border-green-800 px-2 py-1 text-[10px] text-green-800">TTY1: /dev/console</div>
            <div className="max-w-3xl w-full mx-auto mb-10 overflow-y-auto max-h-screen">
                {logs.map((log, i) => (
                    <div key={i} className="mb-1 border-l-2 border-transparent hover:border-green-800 pl-2 break-words">
                        <span className="opacity-50 mr-2 select-none">{`[${(i * 0.134).toFixed(3)}]`}</span>{log}
                    </div>
                ))}
                <div ref={bottomRef} className="animate-pulse">_</div>
            </div>
        </div>
    );
};

export default BootSequence;
