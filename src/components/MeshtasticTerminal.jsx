import React, { useState, useEffect, useRef } from 'react';
import { Radio, Send, RefreshCw, Terminal, Activity } from 'lucide-react';

const MeshtasticTerminal = ({ url }) => {
    // --- STATE ---
    const [logs, setLogs] = useState('');
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('CONNECTING...');
    const [lastUpdated, setLastUpdated] = useState(null);
    const bottomRef = useRef(null);

    // --- 1. POLL THE BUNKER (The Ear) ---
    // Instead of MQTT subscriptions, we poll your OptiPlex every 3 seconds
    useEffect(() => {
        if (!url) {
            setStatus('NO_URL_PROVIDED');
            return;
        }

        const fetchLogs = async () => {
            try {
                // Determine if we are on the same domain (local) or remote
                // If url is passed, use it. Otherwise assume local /api proxy if configured, 
                // but for your setup, you are passing the Cloudflare URL via props.
                const endpoint = `${url}/radio-logs`;
                
                const res = await fetch(endpoint);
                if (res.ok) {
                    const text = await res.text();
                    setLogs(text);
                    setStatus('UPLINK_ESTABLISHED');
                    setLastUpdated(new Date());
                } else {
                    setStatus('VIRTUAL_LINK_ERROR');
                }
            } catch (e) {
                console.error(e);
                setStatus('DISCONNECTED');
            }
        };

        // Initial fetch
        fetchLogs();

        // Heartbeat (Poll every 3s)
        const interval = setInterval(fetchLogs, 3000);
        return () => clearInterval(interval);
    }, [url]);

    // --- AUTO SCROLL ---
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [logs]);

    // --- 2. TRANSMIT (The Mouth) ---
    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const msg = input;
        setInput(''); // Clear UI immediately for responsiveness

        try {
            // Optimistic update: Show it in the log immediately (optional)
            // setLogs(prev => prev + `\n[${new Date().toLocaleTimeString()}] <YOU> ${msg}`);
            
            await fetch(`${url}/broadcast`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: msg }),
            });
        } catch (err) {
            console.error('Broadcast failed', err);
            alert("UPLINK FAILED: Could not transmit.");
        }
    };

    return (
        <div className="flex flex-col h-full bg-black text-green-500 font-mono relative overflow-hidden border-2 border-green-900/50 min-h-[500px]">
            {/* CRT OVERLAY (Preserved from your original) */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-10" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>

            {/* HEADER */}
            <div className="flex justify-between items-center p-2 border-b border-green-900 bg-green-950/20 z-30">
                <div className="flex items-center gap-2">
                    <Radio className={`w-4 h-4 ${status === 'UPLINK_ESTABLISHED' ? 'text-green-400 animate-pulse' : 'text-red-500'}`} />
                    <span className="font-bold text-sm tracking-wider">WATERFORD_RELAY_NODE</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <div className={`flex items-center gap-2 ${status === 'UPLINK_ESTABLISHED' ? 'text-green-500' : 'text-red-500'}`}>
                        {status === 'UPLINK_ESTABLISHED' ? <Activity size={14} /> : <RefreshCw size={14} className="animate-spin" />}
                        <span>{status}</span>
                    </div>
                </div>
            </div>

            {/* MAIN DISPLAY (Raw Log Stream) */}
            <div className="flex-grow relative overflow-hidden bg-black/90 p-4">
                <div className="absolute inset-0 overflow-y-auto p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap" style={{ fontFamily: '"Courier New", Courier, monospace' }}>
                    {/* Header Banner */}
                    <div className="text-green-800 mb-4 select-none">
                        {`>> CONNECTING TO OPTIPLEX BACKEND...\n>> TARGET: ${url || 'UNKNOWN'}\n>> LISTENING ON 915MHZ...\n----------------------------------------`}
                    </div>
                    
                    {/* The Logs */}
                    {logs || <span className="animate-pulse">_WAITING_FOR_PACKETS...</span>}
                    
                    <div ref={bottomRef} />
                </div>
            </div>

            {/* INPUT BAR */}
            <div className="p-2 bg-green-950/30 border-t border-green-900 flex justify-between items-center z-30">
                <form onSubmit={handleSend} className="w-full flex gap-2 items-center">
                    <span className="text-green-500 font-bold">{'>'}</span>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="flex-grow bg-transparent border-b border-green-800 text-green-400 outline-none text-sm focus:border-green-500 placeholder-green-900"
                        placeholder="BROADCAST MESSAGE..."
                        disabled={status !== 'UPLINK_ESTABLISHED'}
                        autoFocus
                    />
                    <button 
                        type="submit" 
                        disabled={status !== 'UPLINK_ESTABLISHED'}
                        className="text-green-500 hover:text-white disabled:opacity-50"
                    >
                        <Send size={14} />
                    </button>
                </form>
            </div>
            
            {/* Last Updated Footer */}
            <div className="absolute bottom-1 right-2 text-[9px] text-green-900 z-30 select-none">
                LAST_PACKET: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'NEVER'}
            </div>
        </div>
    );
};

export default MeshtasticTerminal;