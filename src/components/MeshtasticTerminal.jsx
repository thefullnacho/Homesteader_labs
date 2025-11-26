import React, { useState, useEffect, useRef } from 'react';
import mqtt from 'mqtt';
import { Terminal, Activity, Wifi, WifiOff, Send, Settings, Radio, Zap, Lock, Unlock, Eye, EyeOff, RefreshCw, Smartphone } from 'lucide-react';

// --- UTILS ---
const formatHex = (buffer) => {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join(' ');
};

const MeshtasticTerminal = () => {
    // --- STATE ---
    const [broker, setBroker] = useState('wss://mqtt.meshtastic.org');
    const [rootTopic, setRootTopic] = useState(''); // e.g. msh/US/CT/MyNode
    const [psk, setPsk] = useState(''); // Base64 key (Visual only for now unless we implement crypto)
    const [connected, setConnected] = useState(false);
    const [logs, setLogs] = useState([]);
    const [input, setInput] = useState('');
    const [view, setView] = useState('LOG'); // 'LOG' | 'WATERFALL'
    const [isConfigOpen, setIsConfigOpen] = useState(true); // Start open if no config
    const [detecting, setDetecting] = useState(false);

    const clientRef = useRef(null);
    const bottomRef = useRef(null);
    const waterfallRef = useRef(null);

    // --- LOAD CONFIG ---
    useEffect(() => {
        const saved = localStorage.getItem('hl_meshtastic_config');
        if (saved) {
            try {
                const config = JSON.parse(saved);
                setBroker(config.broker || 'wss://mqtt.meshtastic.org');
                setRootTopic(config.rootTopic || '');
                setPsk(config.psk || '');
                if (config.rootTopic) setIsConfigOpen(false);
            } catch (e) { console.error("Config load error", e); }
        }
    }, []);

    // --- SAVE CONFIG ---
    const saveConfig = () => {
        localStorage.setItem('hl_meshtastic_config', JSON.stringify({ broker, rootTopic, psk }));
        setIsConfigOpen(false);
        addLog('SYSTEM', 'CONFIGURATION SAVED.');
    };

    // --- LOGGING ---
    const addLog = (from, text, type = 'MSG') => {
        setLogs(prev => {
            const newLog = { ts: new Date(), from, text, type, id: Math.random().toString(36).substr(2, 9), raw: text.startsWith('JSON:') ? null : text };
            return [...prev.slice(-500), newLog]; // Keep last 500
        });
    };

    // --- AUTO SCROLL ---
    useEffect(() => {
        if (view === 'LOG' && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (view === 'WATERFALL' && waterfallRef.current) {
            waterfallRef.current.scrollTop = waterfallRef.current.scrollHeight;
        }
    }, [logs, view]);

    // --- MQTT CONNECTION ---
    const connect = () => {
        if (!rootTopic) {
            addLog('SYSTEM', 'ERR: ROOT TOPIC REQUIRED', 'ERR');
            return;
        }
        if (connected) {
            clientRef.current?.end();
            setConnected(false);
            addLog('SYSTEM', 'DISCONNECTED', 'SYS');
            return;
        }

        addLog('SYSTEM', `CONNECTING TO ${broker}...`, 'SYS');

        try {
            const client = mqtt.connect(broker, {
                keepalive: 60,
                clientId: `hl_web_${Math.random().toString(16).substr(2, 8)}`,
                protocolId: 'MQTT',
                protocolVersion: 4,
                clean: true,
                reconnectPeriod: 1000,
                connectTimeout: 30 * 1000,
            });

            clientRef.current = client;

            client.on('connect', () => {
                setConnected(true);
                addLog('SYSTEM', 'UPLINK ESTABLISHED', 'SYS');
                // Subscribe to root topic and subtopics
                // We subscribe to /# to get everything under the root
                client.subscribe(`${rootTopic}/#`, (err) => {
                    if (err) addLog('SYSTEM', `SUB ERR: ${err.message}`, 'ERR');
                    else addLog('SYSTEM', `SUBSCRIBED: ${rootTopic}/#`, 'SYS');
                });
            });

            client.on('message', (topic, payload) => {
                handleMessage(topic, payload);
            });

            client.on('error', (err) => {
                addLog('SYSTEM', `CONNECTION ERROR: ${err.message}`, 'ERR');
                setConnected(false);
            });

            client.on('close', () => {
                if (connected) addLog('SYSTEM', 'CONNECTION LOST', 'ERR');
                setConnected(false);
            });

        } catch (e) {
            addLog('SYSTEM', `INIT ERROR: ${e.message}`, 'ERR');
        }
    };

    // --- MESSAGE HANDLING ---
    const handleMessage = (topic, payload) => {
        try {
            // Try to parse as JSON first (Gateway JSON format)
            const str = payload.toString();
            if (str.startsWith('{')) {
                const json = JSON.parse(str);

                // Extract useful info
                const from = json.from || json.sender || json.packet?.from || 'UNKNOWN';
                let text = '';
                let type = 'MSG';

                if (json.payload?.text) text = json.payload.text;
                else if (json.packet?.decoded?.text) text = json.packet.decoded.text;
                else if (json.type === 'text') text = json.text;
                else if (json.payload?.telemetry) {
                    type = 'DATA';
                    const t = json.payload.telemetry;
                    text = `BAT:${t.batteryLevel}% VOLT:${t.voltage}`;
                }
                else {
                    type = 'RAW';
                    text = `JSON: ${str.substring(0, 50)}...`;
                }

                addLog(from, text, type);
            } else {
                // Binary / Protobuf
                // We can't easily decode protobuf without the definitions, but we can show the hex
                const hex = formatHex(payload);
                addLog('RADIO', `PROTOBUF [${payload.length}b]: ${hex.substring(0, 20)}...`, 'RAW');
                // Store full hex for waterfall in a way that addLog handles (we'll modify addLog or just pass it)
                // Actually, let's just pass the hex as the text for RAW types if we want
            }
        } catch (e) {
            addLog('RADIO', `MALFORMED: ${payload.toString().substring(0, 20)}...`, 'ERR');
        }
    };

    // --- TRANSMIT ---
    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim() || !connected || !clientRef.current) return;

        // This is the ONE topic format that works on every firmware version, encrypted or not
        const channelIndex = psk ? 1 : 0; // 0 = default clear, 1–7 = encrypted
        const sendTopic = `${rootTopic}/2/json/${channelIndex}`;

        const payload = {
            type: "sendtext",
            text: input,
            channel: channelIndex
        };

        clientRef.current.publish(sendTopic, JSON.stringify(payload));
        addLog('YOU', input, 'TX');
        setInput('');
    };

    // --- DETECT NODE ---
    const detectNode = () => {
        if (detecting) return;
        setDetecting(true);
        addLog('SYSTEM', 'SCANNING FOR NODES (15s)...', 'SYS');

        // Connect to public broker temporarily
        const tempClient = mqtt.connect(broker, { clientId: `hl_scan_${Math.random().toString(16).substr(2, 8)}` });

        tempClient.on('connect', () => {
            // Subscribe to global JSON topic to find *any* node info
            // Warning: High traffic. We'll filter for "nodeInfo"
            tempClient.subscribe('msh/2/json/#');
        });

        tempClient.on('message', (topic, payload) => {
            try {
                const msg = JSON.parse(payload.toString());
                if (msg.payload?.user?.longName || msg.payload?.user?.shortName) {
                    // Found a node info packet
                    // In a real scenario, we'd match against a user-provided ID. 
                    // Since we can't know the user's ID, we just show the first few we find as "Candidates"
                    // For this "Simulation of Detection", we'll just grab the topic structure.

                    // Extract root topic from the topic string (e.g. msh/2/json/LongFast/!1234 -> msh/2)
                    // This is tricky. Let's just show the user the node we found.
                    const name = msg.payload.user.shortName;
                    const id = msg.payload.user.id;
                    addLog('SCAN', `FOUND: ${name} (${id})`, 'SYS');

                    // If the user clicks it, we could set it. But for now just logging it is helpful.
                }
            } catch (e) { }
        });

        setTimeout(() => {
            tempClient.end();
            setDetecting(false);
            addLog('SYSTEM', 'SCAN COMPLETE.', 'SYS');
        }, 15000);
    };

    return (
        <div className="flex flex-col h-full bg-black text-green-500 font-mono relative overflow-hidden">
            {/* CRT OVERLAY */}
            <div className="absolute inset-0 pointer-events-none z-20 opacity-10" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>

            {/* HEADER */}
            <div className="flex justify-between items-center p-2 border-b border-green-900 bg-green-950/20 z-30">
                <div className="flex items-center gap-2">
                    <Radio className={`w-4 h-4 ${connected ? 'text-green-400 animate-pulse' : 'text-red-500'}`} />
                    <span className="font-bold text-sm tracking-wider">MESH_TERMINAL_V1</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                    <button onClick={() => setView('LOG')} className={`hover:text-white ${view === 'LOG' ? 'text-white underline' : 'text-green-700'}`}>[LOG]</button>
                    <button onClick={() => setView('WATERFALL')} className={`hover:text-white ${view === 'WATERFALL' ? 'text-white underline' : 'text-green-700'}`}>[WATERFALL]</button>
                    <button onClick={() => setIsConfigOpen(!isConfigOpen)} className="hover:text-white"><Settings size={14} /></button>
                </div>
            </div>

            {/* CONFIG PANEL */}
            {isConfigOpen && (
                <div className="bg-stone-900 border-b border-green-800 p-4 z-30 animate-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs text-green-700 mb-1">MQTT BROKER</label>
                            <input
                                value={broker}
                                onChange={e => setBroker(e.target.value)}
                                className="w-full bg-black border border-green-800 p-2 text-xs text-green-400 focus:border-green-500 outline-none"
                            />
                            <p className="text-[10px] text-stone-500 mt-1 flex items-center gap-1"><Lock size={8} /> Public brokers are insecure. Use a private broker for privacy.</p>
                        </div>
                        <div>
                            <label className="block text-xs text-green-700 mb-1">ROOT TOPIC</label>
                            <div className="flex gap-2">
                                <input
                                    value={rootTopic}
                                    onChange={e => setRootTopic(e.target.value)}
                                    placeholder="msh/US/..."
                                    className="flex-grow bg-black border border-green-800 p-2 text-xs text-green-400 focus:border-green-500 outline-none"
                                />
                                <button
                                    onClick={detectNode}
                                    disabled={detecting}
                                    className="bg-green-900/30 border border-green-800 px-3 hover:bg-green-900 text-xs disabled:opacity-50"
                                >
                                    {detecting ? <RefreshCw className="animate-spin" size={14} /> : 'DETECT'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button onClick={saveConfig} className="bg-green-700 text-black font-bold px-4 py-1 text-xs hover:bg-green-600">SAVE_CONFIG</button>
                    </div>
                </div>
            )}

            {/* MAIN DISPLAY */}
            <div className="flex-grow relative overflow-hidden bg-black/90">
                {view === 'LOG' ? (
                    <div className="absolute inset-0 overflow-y-auto p-4 space-y-2 font-mono text-sm" ref={bottomRef}>
                        {logs.length === 0 && <div className="text-center text-green-900 mt-20">NO_SIGNAL</div>}
                        {logs.map((l) => (
                            <div key={l.id} className="flex gap-2 break-words items-start hover:bg-green-900/10 p-1">
                                <span className="text-green-800 text-[10px] whitespace-nowrap mt-1">{l.ts.toLocaleTimeString()}</span>
                                <span className={`font-bold text-xs whitespace-nowrap w-20 text-right ${l.type === 'TX' ? 'text-yellow-500' : 'text-green-600'}`}>
                                    {l.from}
                                </span>
                                <span className="text-green-500 text-xs md:text-sm">{l.text}</span>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>
                ) : (
                    <div className="absolute inset-0 overflow-y-auto p-4 font-mono text-xs leading-tight" ref={waterfallRef}>
                        {logs.map((l) => (
                            <div key={l.id} className="opacity-80 hover:opacity-100 transition-opacity break-all">
                                <span className="text-green-900 mr-2">
                                    {l.type === 'RAW' && l.text.startsWith('PROTOBUF')
                                        ? l.text.split(': ')[1] // Show actual hex for protobuf
                                        : formatHex(new TextEncoder().encode(l.text)).substring(0, 20) + '...' // Fake hex for text
                                    }
                                </span>
                                <span className="text-green-400">{l.from}: {l.text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* CONNECTION BAR */}
            <div className="p-2 bg-green-950/30 border-t border-green-900 flex justify-between items-center z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={connect}
                        className={`px-4 py-1 text-xs font-bold border ${connected ? 'border-red-900 text-red-500 hover:bg-red-900/20' : 'border-green-500 text-green-500 hover:bg-green-500/20'}`}
                    >
                        {connected ? 'DISCONNECT' : 'CONNECT_UPLINK'}
                    </button>
                    <span className="text-[10px] text-green-800 hidden md:inline">{connected ? `LINKED: ${broker}` : 'STANDBY'}</span>
                </div>

                {connected && (
                    <form onSubmit={handleSend} className="flex-grow max-w-lg ml-4 flex gap-2">
                        <span className="text-green-500 animate-pulse">{'>'}</span>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className="flex-grow bg-transparent border-b border-green-800 text-green-400 outline-none text-sm focus:border-green-500"
                            placeholder="TRANSMIT..."
                        />
                        <button type="submit" className="text-green-500 hover:text-white"><Send size={14} /></button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default MeshtasticTerminal;
