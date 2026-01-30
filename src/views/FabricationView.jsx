import React, { useState } from 'react';
import * as THREE from 'three';
import { Activity, Upload, CheckCircle, Terminal } from 'lucide-react';
import PreviewScene from '../components/PreviewScene';
import { parseSTL } from '../lib/stlUtils';

const FabricationView = ({ addToCart }) => {
    const [step, setStep] = useState(1);
    const [file, setFile] = useState(null);
    const [material, setMaterial] = useState('PLA');
    const [analyzing, setAnalyzing] = useState(false);
    const [consoleLog, setConsoleLog] = useState([]);
    const [parsedGeometry, setParsedGeometry] = useState(null);
    const [volume, setVolume] = useState(0); // cm3

    const addLog = (msg) => {
        setConsoleLog(prev => [...prev.slice(-4), `> ${msg}`]);
    };

    const handleFileUpload = (e) => {
        const uploaded = e.target.files[0];
        if (uploaded) {
            setFile(uploaded);
            setAnalyzing(true);
            addLog(`INITIATING SCAN: ${uploaded.name}`);

            const reader = new FileReader();
            reader.onload = function (event) {
                try {
                    const buffer = event.target.result;
                    const { vertices, volume: calculatedVol } = parseSTL(buffer);

                    const geometry = new THREE.BufferGeometry();
                    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
                    geometry.computeVertexNormals();

                    setParsedGeometry(geometry);
                    setVolume(calculatedVol);

                    setTimeout(() => {
                        addLog(`VOL: ${calculatedVol.toFixed(2)} cm3`);
                        addLog('GEOMETRY VERIFIED.');
                        setAnalyzing(false);
                        setStep(2);
                    }, 1500);

                } catch (err) {
                    addLog("ERR: PARSE FAILED. USING DEFAULT MESH.");
                    setAnalyzing(false);
                    setStep(2);
                    setVolume(45.2); // Fallback
                }
            };
            reader.readAsArrayBuffer(uploaded);
        }
    };

    const getPrice = () => {
        // Pricing based on calculated volume
        const baseRate = 0.85; // $ per cm3
        const materialMult = material === 'RESIN' ? 2.0 : material === 'PETG' ? 1.5 : 1.0;
        const setupFee = 15.00;
        const price = (volume * baseRate * materialMult) + setupFee;
        const quotedPrice = isNaN(price) ? "0.00" : price.toFixed(2);
        console.log('Quote Calc:', { volume, baseRate, materialMult, setupFee, calculatedPrice: price, quotedPrice });
        return quotedPrice;
    };

    const getTime = () => {
        // Rough time estimate
        const minutes = volume * 2.5;
        const h = Math.floor(minutes / 60);
        const m = Math.floor(minutes % 60);
        return `${h}h ${m}m`;
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8 relative z-10">
            <div className="mb-8 border-b border-dashed border-stone-400 pb-2 flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold uppercase mb-1">Fabrication_Wiz.exe</h2>
                    <p className="text-xs text-stone-500">v.4.1.0 // BETA RELEASE</p>
                </div>
                <div className="text-right text-xs hidden sm:block">
                    <p>SERVER: <span className="text-green-700">ONLINE</span></p>
                    <p>QUEUE_POS: 00</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN */}
                <div className="lg:col-span-2 space-y-6">

                    {/* STEP 1: UPLOAD */}
                    <div className={`border-2 ${step >= 1 ? 'border-stone-900 dark:border-stone-700 bg-white dark:bg-stone-900' : 'border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-950'} p-1 relative transition-all shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]`}>
                        <div className="border border-stone-200 dark:border-stone-800 p-6 h-full">
                            <div className="absolute top-0 left-0 bg-stone-900 dark:bg-stone-200 text-white dark:text-stone-900 text-[10px] px-2 py-1">STEP_01 // INPUT</div>

                            {step === 1 && (
                                <div className="mt-4 text-center border-2 border-dashed border-stone-300 dark:border-stone-700 p-10 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors group cursor-pointer relative h-64 flex flex-col items-center justify-center">
                                    <input type="file" accept=".stl" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
                                    {analyzing ? (
                                        <div className="flex flex-col items-center">
                                            <Activity className="w-12 h-12 text-stone-900 dark:text-stone-200 mb-4 animate-bounce" />
                                            <p className="font-bold animate-pulse">PARSING_GEOMETRY...</p>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-10 h-10 mx-auto text-stone-400 dark:text-stone-600 group-hover:text-stone-900 dark:group-hover:text-stone-200 mb-4" />
                                            <p className="font-bold text-stone-900 dark:text-stone-200">INITIATE UPLOAD</p>
                                            <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-2">[ .STL FILES ONLY ]</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {step > 1 && (
                                <div className="mt-4 flex items-center justify-between bg-stone-100 dark:bg-stone-800 p-4 border border-stone-300 dark:border-stone-700">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-stone-900 dark:text-stone-200" size={20} />
                                        <div>
                                            <p className="font-bold uppercase max-w-[150px] truncate">{file?.name || 'ERR_NO_NAME'}</p>
                                            <p className="text-[10px] text-stone-500 dark:text-stone-400">HASH: {Math.random().toString(36).substring(7)}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => { setStep(1); setParsedGeometry(null); }} className="text-[10px] underline hover:bg-stone-900 dark:hover:bg-stone-200 hover:text-white dark:hover:text-stone-900 px-2 py-1">RESTART_SEQUENCE</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* STEP 2: CONFIG */}
                    {step >= 2 && (
                        <div className={`border-2 border-stone-900 dark:border-stone-700 bg-white dark:bg-stone-900 p-1 relative shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]`}>
                            <div className="border border-stone-200 dark:border-stone-800 p-6">
                                <div className="absolute top-0 left-0 bg-stone-900 dark:bg-stone-200 text-white dark:text-stone-900 text-[10px] px-2 py-1">STEP_02 // MAT_CONFIG</div>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] font-bold block mb-2 text-stone-500 dark:text-stone-400">SELECT_SUBSTRATE</label>
                                        <div className="space-y-2">
                                            {['PLA', 'PETG', 'RESIN'].map(m => (
                                                <button
                                                    key={m}
                                                    onClick={() => { setMaterial(m); addLog(`MATERIAL SET TO: ${m}`); }}
                                                    className={`w-full text-left px-4 py-2 border font-bold text-sm flex justify-between items-center ${material === m ? 'border-stone-900 dark:border-stone-200 bg-stone-900 dark:bg-stone-200 text-white dark:text-stone-900' : 'border-stone-300 dark:border-stone-700 hover:border-stone-500 dark:hover:border-stone-400'}`}
                                                >
                                                    <span>{m}</span>
                                                    {material === m && <div className="w-1.5 h-1.5 bg-white dark:bg-stone-900 animate-pulse" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-xs space-y-4">
                                        <div className="border-l-2 border-stone-300 dark:border-stone-700 pl-3">
                                            <p className="text-stone-500 dark:text-stone-400 text-[10px] mb-1">CALC_VOLUME</p>
                                            <p className="font-bold">{volume.toFixed(2)} cmÂ³</p>
                                        </div>
                                        <div className="border-l-2 border-stone-300 dark:border-stone-700 pl-3">
                                            <p className="text-stone-500 dark:text-stone-400 text-[10px] mb-1">TIME_EST</p>
                                            <p className="font-bold">{getTime()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN: Preview & Action */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="border-2 border-stone-900 dark:border-stone-700 bg-white dark:bg-stone-900 p-1 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                        <div className="flex justify-between items-center mb-1 px-1 bg-stone-200 dark:bg-stone-800">
                            <span className="text-[10px] font-bold text-stone-500 dark:text-stone-400 px-2 py-1">LIDAR_PREVIEW</span>
                            <span className="text-[10px] text-stone-900 dark:text-white animate-pulse px-2">â REC</span>
                        </div>
                        {step >= 2 ? (
                            <PreviewScene materialType={material} uploadedGeometry={parsedGeometry} />
                        ) : (
                            <div className="w-full h-64 bg-stone-800 flex flex-col items-center justify-center border-b border-stone-700 dark:border-stone-600">
                                <div className="w-full h-[1px] bg-stone-600 animate-pulse mb-4 w-3/4"></div>
                                <p className="text-[10px] text-stone-500 text-center">AWAITING_DATA_STREAM</p>
                                <div className="w-full h-[1px] bg-stone-600 animate-pulse mt-4 w-1/2"></div>
                            </div>
                        )}
                        <div className="bg-stone-900 p-3 h-32 overflow-hidden font-mono text-[10px] text-green-500 border-t border-stone-800">
                            {consoleLog.map((log, i) => <div key={i} className="opacity-80">{log}</div>)}
                            <div className="animate-pulse">_</div>
                        </div>
                    </div>

                    {step >= 2 && (
                        <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white p-1 border-2 border-stone-900 dark:border-stone-700 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                            <div className="p-4 border border-stone-200 dark:border-stone-800">
                                <div className="flex justify-between items-end mb-4 border-b border-stone-900 dark:border-stone-700 pb-4 border-dashed">
                                    <div>
                                        <p className="text-[10px] text-stone-500 dark:text-stone-400">TOTAL_REQUISITION</p>
                                        <h3 className="text-3xl font-bold">${getPrice()}</h3>
                                    </div>
                                    <p className="text-xs text-stone-400 mb-1">USD</p>
                                </div>
                                <button
                                    onClick={async () => {
                                        if (!file) return;
                                        try {
                                            const arrayBuffer = await file.arrayBuffer();
                                            const bytes = new Uint8Array(arrayBuffer);
                                            let binary = '';
                                            for (let i = 0; i < bytes.length; i++) {
                                                binary += String.fromCharCode(bytes[i]);
                                            }
                                            const base64 = btoa(binary);

                                            const response = await fetch('/api/upload-stl.js', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    file: base64,
                                                    filename: file.name || 'untitled.stl',
                                                    volume,
                                                    material // ← NEW: Pass material to sync pricing
                                                })
                                            });

                                            if (!response.ok) {
                                                console.error('Upload failed', await response.text());
                                                return;
                                            }

                                            const { url, volume: serverVolume, price, filename: uniqueFilename, signature } = await response.json();
                                            const numericPrice = parseFloat(price);

                                            console.log('Cart Add:', { volume, material, price: numericPrice }); // Verify

                                            addToCart({
                                                id: 'CUST_PART',
                                                name: `Printed ${file.name || 'UNTITLED'} (${serverVolume}cm³, ${material})`,
                                                price: numericPrice, // Synced from API (matches UI quote)
                                                category: 'CUSTOM',
                                                description: `STL: ${url} (Material: ${material})`,
                                                specs: [material.toUpperCase(), 'CUSTOM_FAB'],
                                                material, // For server-side verification
                                                signature // Store signature for verification
                                            });
                                        } catch (err) {
                                            console.error('Confirm print order error', err);
                                        }
                                    }}
                                    className="w-full font-bold py-3 transition-all flex justify-center items-center gap-2 text-sm bg-stone-900 dark:bg-stone-200 text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-400 hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <Terminal size={14} />
                                    [ CONFIRM_PRINT_ORDER ]
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default FabricationView;
