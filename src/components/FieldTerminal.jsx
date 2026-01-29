import React, { useState, useEffect, useRef } from 'react';
import { Send, Activity, Radio, Wifi, ShieldAlert, Cpu } from 'lucide-react';

// Utility for "typing" effect
const Typewriter = ({ text, speed = 30, onComplete }) => {
    const [displayed, setDisplayed] = useState('');
    
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayed(text.substring(0, i + 1));
            i++;
            if (i > text.length) {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed, onComplete]);

    return <span>{displayed}</span>;
};

const FieldTerminal = ({ url }) => {
    const [bootPhase, setBootPhase] = useState(0); // 0: Off, 1: BIOS, 2: Connecting, 3: Active
    const [logs, setLogs] = useState([]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const scrollContainerRef = useRef(null);

    // --- BOOT SEQUENCE ---
    useEffect(() => {
        const sequence = async () => {
            setBootPhase(1);
            await new Promise(r => setTimeout(r, 800)); // BIOS check
            setBootPhase(2);
            await new Promise(r => setTimeout(r, 1500)); // Handshake
            setBootPhase(3);
            addLog(">> SYSTEM READY.", "SYSTEM");
            addLog(">> LISTENING ON 915MHz...", "SYSTEM");
        };
        sequence();
    }, []);

    // --- MOCK DATA FEED (Placeholder for MQTT) ---
    useEffect(() => {
        if (bootPhase !== 3) return;
        
        const mockMessages = [
            "SENSOR_01: HUMIDITY 64% [NOMINAL]",
            "SENSOR_02: TEMP 22.4C [OK]",
            "PERIMETER: NO MOTION DETECTED",
            "WATER_TANK: LEVEL 88%",
            "SOLAR_ARRAY: 14.2V OUTPUT",
            "MESH_NET: NODE_04 JOINED",
            "SYSTEM: HEARTBEAT RECEIVED"
        ];

        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                const msg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
                addLog(msg, "NETWORK");
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [bootPhase]);

    // Auto-scroll
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [logs, bootPhase]);

    const addLog = (msg, source = "UNKNOWN") => {
        const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
        setLogs(prev => [...prev.slice(-50), { timestamp, source, msg }]); // Keep last 50
    };

    const handleCommand = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        addLog(input, "USER_CMD");
        
        // Simple command parsing
        const cmd = input.trim().toLowerCase();
        if (cmd === '/clear') setLogs([]);
        else if (cmd === '/status') addLog("ALL SYSTEMS NOMINAL. BATTERY 100%.", "SYSTEM");
        else if (cmd === '/help') addLog("COMMANDS: /clear, /status, /ping", "SYSTEM");
        else addLog(`TRANSMITTING: ${input}...`, "TX");
        
        setInput('');
    };

    // --- RENDERERS ---

    if (bootPhase === 0) return <div className="bg-black h-full w-full" />;

    if (bootPhase === 1) {
        return (
            <div className="bg-black h-full w-full p-8 font-mono text-amber-500 text-sm flex flex-col justify-center items-center">
                <div className="w-64">
                    <div className="flex justify-between mb-2">
                        <span>BIOS_CHECK</span>
                        <span>[ OK ]</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>MEMORY</span>
                        <span>[ 64MB ]</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>LORA_MODULE</span>
                        <span>[ FOUND ]</span>
                    </div>
                    <div className="mt-4 border-t border-amber-900 pt-2 text-center animate-pulse">
                        INITIALIZING...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[80vh] bg-[#0a0a0a] text-amber-500 font-mono relative overflow-hidden border-4 border-[#1a1a1a] rounded-lg shadow-2xl">
            {/* CRT OVERLAY EFFECTS */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-10" 
                style={{ 
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 3px)',
                    backgroundSize: '100% 4px' 
                }}>
            </div>
            <div className="absolute inset-0 pointer-events-none z-20 opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(255,176,0,0) 60%, rgba(20,10,0,0.8) 100%)'
                }}>
            </div>

            {/* HEADER */}
            <div className="flex justify-between items-center p-3 border-b-2 border-amber-900/50 bg-[#110d00] z-30 select-none">
                <div className="flex items-center gap-3">
                    <Radio className="w-5 h-5 text-amber-600 animate-pulse" />
                    <span className="font-bold tracking-widest text-amber-600">FIELD_TERMINAL_V.2</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-amber-800">
                    <div className="flex items-center gap-2">
                        <Wifi size={14} />
                        <span>915MHz [OPEN]</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Cpu size={14} />
                        <span>OPTIPLEX_LINK: {bootPhase === 2 ? 'CONNECTING' : 'ACTIVE'}</span>
                    </div>
                </div>
            </div>

            {/* MAIN DISPLAY */}
            <div 
                ref={scrollContainerRef}
                className="flex-grow relative overflow-y-auto p-4 md:p-6 scrollbar-hide bg-black/95"
            >
                {/* Intro Banner */}
                <div className="text-amber-800 mb-6 whitespace-pre-wrap leading-tight opacity-50 select-none">
{`   __  _____  __  _________  ______  _____    _    
  / / / / _ \/  |/  / __/ / / / __/ /_  _/   | |   
 / /_/ / // / /|_/ / _// /_/ / _/    / /     |_|   
/\____/____/_/  /_/___/\____/___/   /___/    (_)   
                                                   `}
                </div>

                {/* Log Stream */}
                <div className="space-y-1">
                    {logs.map((log, i) => (
                        <div key={i} className="flex gap-4 text-sm md:text-base hover:bg-amber-900/10 px-2 py-0.5 rounded transition-colors group">
                            <span className="text-amber-800 shrink-0 w-20 text-[10px] pt-1">{log.timestamp}</span>
                            <span className="text-amber-700 shrink-0 w-24 font-bold text-[10px] pt-1 tracking-wider group-hover:text-amber-500">
                                [{log.source}]
                            </span>
                            <span className="text-amber-500/90 break-all shadow-[0_0_5px_rgba(255,176,0,0.3)]">
                                {log.msg}
                            </span>
                        </div>
                    ))}
                    <div ref={bottomRef} className="h-4" />
                </div>
            </div>

            {/* INPUT AREA */}
            <div className="p-4 bg-[#110d00] border-t-2 border-amber-900/50 z-30">
                <form onSubmit={handleCommand} className="flex gap-3 items-center bg-black/50 border border-amber-900/30 p-2 rounded">
                    <span className="text-amber-600 font-bold animate-pulse">{'>'}</span>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="flex-grow bg-transparent text-amber-500 outline-none font-bold placeholder-amber-900/50 uppercase"
                        placeholder="ENTER_COMMAND..."
                        autoFocus
                    />
                    <button
                        type="submit" 
                        className="text-amber-700 hover:text-amber-500 transition-colors"
                    >
                        <Send size={16} />
                    </button>
                </form>
            </div>
            
            {/* Status Bar */}
            <div className="bg-amber-950 text-amber-500/50 text-[10px] px-2 py-0.5 flex justify-between uppercase tracking-wider select-none">
                <span>MEM: 64KB FREE</span>
                <span>SECURE_CHANNEL: OFF</span>
                <span>PWR: 100%</span>
            </div>
        </div>
    );
};

export default FieldTerminal;
