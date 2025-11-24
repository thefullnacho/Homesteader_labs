import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Upload, Box, FileText, X, ChevronRight, Terminal, Cpu, Activity, Zap, CheckCircle, Wind, Lock, Unlock, AlertTriangle, Save } from 'lucide-react';
import * as THREE from 'three';

// --- UTILS: STL PARSER ---
const parseSTL = (buffer) => {
    const view = new DataView(buffer);
    let offset = 80;
    const triangleCount = view.getUint32(offset, true);
    offset += 4;

    const vertices = [];
    let volume = 0;

    for (let i = 0; i < triangleCount; i++) {
        offset += 12; // Skip Normal
        const p1 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;
        const p2 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;
        const p3 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;

        vertices.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z, p3.x, p3.y, p3.z);

        // Signed volume calculation
        const v321 = p3.x * p2.y * p1.z;
        const v231 = p2.x * p3.y * p1.z;
        const v312 = p3.x * p1.y * p2.z;
        const v132 = p1.x * p3.y * p2.z;
        const v213 = p2.x * p1.y * p3.z;
        const v123 = p1.x * p2.y * p3.z;

        volume += (1.0 / 6.0) * (-v321 + v231 + v312 - v132 - v213 + v123);
        offset += 2; // Attribute byte count
    }

    return {
        vertices: new Float32Array(vertices),
        volume: Math.abs(volume) / 1000 // cm3
    };
};

// --- DATA ---
const INITIAL_PRODUCTS = [
    { id: 'WLK-MN-PRO', name: 'WALKING MAN PRO', price: 1250.00, category: 'HARDWARE', description: 'High-torque exoskeleton assistance module. Industrial grade.', specs: ['TI_ALLOY', '24V_SYS', 'IP67_RATED'], image: 'pro' },
    { id: 'WLK-MN-LIFE', name: 'WALKING MAN LIFE', price: 850.00, category: 'HARDWARE', description: 'Daily driver assistance unit. Lightweight composite frame.', specs: ['C_FIBER', '12V_SYS', 'MODULAR_V2'], image: 'life' },
    { id: 'STL-GRIP-V4', name: 'MODULE: GRIP V4', price: 25.00, category: 'DIGITAL', description: 'Source files for the V4 universal grip attachment.', specs: ['FMT_STL', 'SUP_FREE', 'TOL_HIGH'], image: 'stl' },
    { id: 'STL-TRD-HVY', name: 'MODULE: TREAD HVY', price: 30.00, category: 'DIGITAL', description: 'Heavy duty traction pad replacement patterns.', specs: ['FMT_STL', 'OBJ_INC', 'VASE_MODE'], image: 'stl' }
];

const SECRET_PRODUCT = {
    id: 'WLK-MN-EXE',
    name: 'WALKING MAN SOURCE',
    price: 0.00,
    category: 'ZERO_DAY',
    description: '>> CLASSIFIED: Full schematic source code and firmware dumps for the MK1 prototype.',
    specs: ['ENCRYPTED', 'ROOT_ACCESS', 'DANGEROUS'],
    image: 'exe'
};

const DEFAULT_ARCHIVE_POSTS = [
    { id: 'LOG_004', date: '1968.11.04', title: 'SUSTAINABLE FABRICATION PROTOCOLS', content: '>> TRANSITIONING TO LOCALIZED BIOPLASTIC PRODUCTION HAS REDUCED SUPPLY CHAIN DEPENDENCY BY 40%. THE BRUTALITY OF THE NEW FORMS IS NOT AN AESTHETIC CHOICE, BUT A REQUIREMENT OF THE MATERIAL CONSTRAINTS. WE BUILD WHAT LASTS.', tags: ['MFG', 'ECO', 'LOG'] },
    { id: 'LOG_003', date: '1968.09.12', title: 'PROJECT WALKING MAN: FIELD TEST', content: '>> UNIT 04 SUSTAINING 85% LOAD CAPACITY OVER ROUGH TERRAIN. HYDRAULIC ASSIST SHOWING SIGNS OF THERMAL ACCUMULATION. REVISION 5 WILL INTEGRATE PASSIVE COOLING FINS DERIVED FROM THE HEAT SINK ARRAYS.', tags: ['R&D', 'FIELD', 'REP'] },
    { id: 'LOG_002', date: '1968.08.01', title: 'THE MYTH OF SMOOTHNESS', content: '>> MODERN CONSUMERISM HIDES THE METHOD OF PRODUCTION. HOMESTEADER LABS EXPOSES THE LAYER LINES. THE ARTIFACT MUST BEAR THE MARKS OF ITS MAKING. TO HIDE THE SEAM IS TO LIE ABOUT THE ORIGIN.', tags: ['PHIL', 'MFG'] }
];

// --- COMPONENTS ---

// 1. JSON EDITOR (NEW FEATURE)
const JsonEditor = ({ isOpen, onClose, data, onSave }) => {
    const [jsonContent, setJsonContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) setJsonContent(JSON.stringify(data, null, 2));
    }, [isOpen, data]);

    const handleSave = () => {
        try {
            const parsed = JSON.parse(jsonContent);
            onSave(parsed);
            onClose();
        } catch (e) {
            setError(e.message);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[210] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-stone-900 border-2 border-stone-400 w-full max-w-3xl h-[80vh] flex flex-col shadow-2xl">
                <div className="bg-stone-800 p-2 border-b border-stone-600 flex justify-between items-center text-stone-300 font-mono text-xs">
                    <span className="flex items-center gap-2"><FileText size={14} /> EDITING: ARCHIVE_LOGS.JSON</span>
                    <button onClick={onClose} className="hover:text-white"><X size={16} /></button>
                </div>
                <div className="flex-grow relative">
                    <textarea
                        className="w-full h-full bg-black text-green-500 font-mono text-xs p-4 outline-none resize-none"
                        value={jsonContent}
                        onChange={(e) => { setJsonContent(e.target.value); setError(null); }}
                        spellCheck="false"
                    />
                    {error && (
                        <div className="absolute bottom-4 left-4 right-4 bg-red-900/90 text-white p-2 text-xs font-mono border border-red-500 flex items-center gap-2">
                            <AlertTriangle size={14} /> SYNTAX ERROR: {error}
                        </div>
                    )}
                </div>
                <div className="p-4 bg-stone-800 border-t border-stone-600 flex justify-end gap-4">
                    <button onClick={onClose} className="text-stone-400 hover:text-white font-mono text-xs uppercase">Cancel</button>
                    <button onClick={handleSave} className="bg-stone-200 text-stone-900 px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-white flex items-center gap-2">
                        <Save size={14} /> Commit Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

// 2. TERMINAL OVERLAY
const TerminalOverlay = ({ isOpen, onClose, cart, products, archive, openJsonEditor }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        'HOMESTEADER LABS TERMINAL ACCESS [v4.2.0]',
        'ENTER "help" FOR COMMAND LIST',
        '----------------------------------------'
    ]);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) inputRef.current.focus();
    }, [isOpen]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const args = cmd.split(' ');
            let response = '';

            switch (args[0]) {
                case 'help':
                    response = 'COMMANDS: ls, cat [id], edit archive, clear, whoami, exit';
                    break;
                case 'ls':
                    if (args[1] === '/shop' || !args[1]) {
                        response = `DIR /SHOP:\n${products.map(p => `${p.id}  <${p.category}>`).join('\n')}`;
                    } else if (args[1] === '/archive') {
                        response = `DIR /ARCHIVE:\n${archive.map(p => `${p.id}  [${p.date}]`).join('\n')}`;
                    } else {
                        response = 'DIRECTORIES: /shop, /archive, /sys';
                    }
                    break;
                case 'cat':
                    const id = args[1]?.toUpperCase();
                    const prod = products.find(p => p.id === id);
                    const post = archive.find(p => p.id === id);
                    if (prod) response = `READING ${id}...\nNAME: ${prod.name}\nPRICE: $${prod.price}\nDESC: ${prod.description}`;
                    else if (post) response = `READING ${id}...\nDATE: ${post.date}\nTITLE: ${post.title}\nCONTENT: ${post.content}`;
                    else response = `ERR: FILE ${id} NOT FOUND`;
                    break;
                case 'edit':
                    if (args[1] === 'archive') {
                        response = 'OPENING JSON EDITOR...';
                        openJsonEditor();
                    } else {
                        response = 'ERR: TARGET NOT EDITABLE. TRY "edit archive"';
                    }
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'whoami':
                    response = 'GUEST_USER@HOMESTEADER_PUBLIC_NODE';
                    break;
                case 'exit':
                    onClose();
                    setInput('');
                    return;
                case 'sudo':
                    response = 'PERMISSION DENIED. BIOMETRIC AUTH REQUIRED.';
                    break;
                default:
                    response = `ERR: UNKNOWN COMMAND "${cmd}"`;
            }

            setHistory(prev => [...prev, `> ${input}`, response, ' ']);
            setInput('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] bg-black/95 text-green-500 font-mono text-xs md:text-sm p-4 md:p-8 flex flex-col font-bold" onClick={() => inputRef.current?.focus()}>
            <div className="flex justify-between border-b border-green-800 pb-2 mb-4">
                <span>TERMINAL_SESSION_ACTIVE</span>
                <span className="cursor-pointer hover:text-white" onClick={onClose}>[X] TERMINATE</span>
            </div>
            <div className="flex-grow overflow-y-auto whitespace-pre-wrap font-normal">
                {history.map((line, i) => <div key={i}>{line}</div>)}
                <div ref={bottomRef} />
            </div>
            <div className="flex items-center gap-2 mt-4 border-t border-green-800 pt-4">
                <span>user@homesteader:~$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent outline-none flex-grow text-white caret-green-500"
                    autoFocus
                />
            </div>
        </div>
    );
};

// 3. BOOT SEQUENCE
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
        { text: "DECRYPTING ARCHIVE LOGS...", delay: 2600 },
        { text: "STARTING BIOSYNTHESIS MONITOR...", delay: 2800 },
        { text: "SYSTEM READY.", delay: 3100 },
        { text: "EXECUTING GUI...", delay: 3400 },
    ];

    useEffect(() => {
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

// 4. PAYMENT MODAL
const PaymentModal = ({ isOpen, onClose, total }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
            <div className="bg-stone-900 border-2 border-[#e8e6e1] text-[#e8e6e1] p-8 max-w-lg w-full font-mono relative shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <button onClick={onClose} className="absolute top-2 right-2 text-stone-500 hover:text-white"><X /></button>
                <div className="text-center mb-8">
                    <AlertTriangle className="mx-auto w-12 h-12 mb-4 text-yellow-500 animate-pulse" />
                    <h2 className="text-2xl font-bold uppercase mb-2">Initiate Crypto Requisition</h2>
                    <p className="text-xs text-stone-400">SECURE CHANNEL ESTABLISHED via WATERFORD_NODE</p>
                </div>

                <div className="space-y-4 text-xs border border-stone-700 p-4 mb-6 bg-black">
                    <div className="flex justify-between">
                        <span>DESTINATION:</span>
                        <span className="text-green-500">0x71C...3A9F</span>
                    </div>
                    <div className="flex justify-between">
                        <span>AMOUNT:</span>
                        <span className="font-bold text-lg">${total} USD</span>
                    </div>
                    <div className="flex justify-between">
                        <span>GAS_FEE:</span>
                        <span>0.00042 ETH</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-stone-800 text-stone-500 animate-pulse">
                        &gt; AWAITING PEER CONFIRMATION...
                    </div>
                </div>

                <button className="w-full bg-[#e8e6e1] text-stone-900 font-bold py-3 hover:bg-white flex justify-center items-center gap-2">
                    <Lock size={14} /> SIGN TRANSACTION
                </button>
            </div>
        </div>
    );
};

// 5. ORGANIC VISUALIZER
const BioMonitor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        // Mouse Interaction State
        let mouseX = 0;
        let mouseY = 0;
        let scrollY = 0;

        const handleMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
        const handleScroll = () => { scrollY = window.scrollY; };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('scroll', handleScroll);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            time += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(40, 40, 35, 0.08)';
            ctx.lineWidth = 1.5;

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Interaction Factors
            const mouseFactorX = (mouseX - centerX) * 0.0005;
            const mouseFactorY = (mouseY - centerY) * 0.0005;
            const scrollFactor = scrollY * 0.002;

            for (let j = 0; j < 8; j++) {
                ctx.beginPath();
                const baseRadius = 100 + (j * 60) + (Math.sin(time + j) * 10);

                for (let i = 0; i <= 360; i += 2) {
                    const angle = (i * Math.PI) / 180;

                    const noise =
                        Math.sin(angle * 4 + time + j + scrollFactor) * 20 +
                        Math.cos(angle * 8 - time * 2) * 10 +
                        Math.sin(angle * 2 + time * 0.5) * 30;

                    const r = baseRadius + noise;

                    const x = centerX + Math.cos(angle) * r + (mouseFactorX * r);
                    const y = centerY + Math.sin(angle) * r + (mouseFactorY * r);

                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
};

// 6. 3D COMPONENT FOR WIZARD
const PreviewScene = ({ materialType, uploadedGeometry }) => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const meshRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(0xf5f5f0);

        // Camera
        const camera = new THREE.PerspectiveCamera(50, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        rendererRef.current = renderer;

        // DOWNSCALE FOR ECO-BRUTALIST AESTHETIC
        const scaleFactor = 0.25;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width * scaleFactor, height * scaleFactor, false);
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.imageRendering = "pixelated";

        mountRef.current.appendChild(renderer.domElement);

        // Initial Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0x404040));

        // Animation Loop
        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            if (meshRef.current) {
                meshRef.current.rotation.x += 0.005;
                meshRef.current.rotation.y += 0.01;
            }
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;

            // Maintain low-res aspect
            renderer.setSize(w * scaleFactor, h * scaleFactor, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    // Update Geometry/Material when props change
    useEffect(() => {
        if (!sceneRef.current) return;

        // Remove old mesh
        if (meshRef.current) {
            sceneRef.current.remove(meshRef.current);
            // Only dispose geometry if it's one we created locally (the box) or a clone we made
            if (meshRef.current.geometry) meshRef.current.geometry.dispose();
        }

        // Determine Geometry
        let geometry;
        if (uploadedGeometry) {
            // CLONE to avoid mutating/disposing the parent's prop
            geometry = uploadedGeometry.clone();
            geometry.center();
        } else {
            // Procedural "Mechanical" shape if no file
            geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        }

        // AUTO-SCALE MESH
        geometry.computeBoundingBox();
        const size = new THREE.Vector3();
        geometry.boundingBox.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);

        // Target size is 2.5 units (fits well with camera at z=5)
        const targetSize = 2.5;
        const scale = targetSize / maxDim;

        // Determine Color
        let color = 0x292524;
        if (materialType === 'RESIN') color = 0xd97706;
        if (materialType === 'PLA') color = 0x166534;
        if (materialType === 'PETG') color = 0x3b82f6;

        const material = new THREE.MeshStandardMaterial({
            color: color,
            wireframe: true,
            roughness: 0.8,
            metalness: 0.2
        });

        const mesh = new THREE.Mesh(geometry, material);

        // Apply scale to mesh instead of geometry to preserve original data if needed, 
        // but scaling geometry is safer for lighting/normals in this simple viewer.
        // Actually, scaling the mesh is more standard.
        if (uploadedGeometry) {
            mesh.scale.set(scale, scale, scale);
        }

        meshRef.current = mesh;
        sceneRef.current.add(mesh);

    }, [materialType, uploadedGeometry]);

    return <div ref={mountRef} className="w-full h-64 border-b-2 border-stone-800 bg-stone-200 cursor-crosshair filter grayscale contrast-125" />;
};

// 7. NAVIGATION
const Navigation = ({ setView, cartCount, currentView }) => (
    <nav className="border-b-2 border-stone-900 bg-[#e8e6e1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div
                onClick={() => setView('HOME')}
                className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2 group"
            >
                <div className="w-8 h-8 bg-stone-900 text-[#e8e6e1] flex items-center justify-center group-hover:invert transition-all">
                    <Box size={20} />
                </div>
                <span className="hidden sm:inline">HOMESTEADER_LABS</span>
                <span className="sm:hidden">HL_SYS</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm">
                {['SHOP', 'ARCHIVE', 'FABRICATION'].map((item) => (
                    <button
                        key={item}
                        onClick={() => setView(item)}
                        className={`hover:bg-stone-900 hover:text-white px-2 py-1 transition-colors uppercase ${currentView === item ? 'bg-stone-900 text-white' : ''}`}
                    >
                        {`[ ${item} ]`}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setView('CART')}
                className="flex items-center gap-2 border border-stone-900 px-3 py-1 hover:bg-stone-900 hover:text-white transition-colors"
            >
                <span className="text-xs">CART:</span>
                <span className="font-bold">{cartCount.toString().padStart(2, '0')}</span>
            </button>
        </div>
        <div className="md:hidden flex justify-around border-t border-stone-900 py-2 bg-stone-200 text-xs">
            {['SHOP', 'ARCHIVE', 'FABRICATION'].map((item) => (
                <button
                    key={item}
                    onClick={() => setView(item)}
                    className={`${currentView === item ? 'text-stone-900 underline decoration-2' : 'text-stone-600'}`}
                >
                    {item}
                </button>
            ))}
        </div>
    </nav>
);

// 8. FAB WIZARD
const FabWizard = ({ addToCart }) => {
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
        return isNaN(price) ? "0.00" : price.toFixed(2);
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
                    <div className={`border-2 ${step >= 1 ? 'border-stone-900 bg-white' : 'border-stone-300 bg-stone-100'} p-1 relative transition-all shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]`}>
                        <div className="border border-stone-200 p-6 h-full">
                            <div className="absolute top-0 left-0 bg-stone-900 text-white text-[10px] px-2 py-1">STEP_01 // INPUT</div>

                            {step === 1 && (
                                <div className="mt-4 text-center border-2 border-dashed border-stone-300 p-10 hover:bg-stone-50 transition-colors group cursor-pointer relative h-64 flex flex-col items-center justify-center">
                                    <input type="file" accept=".stl" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileUpload} />
                                    {analyzing ? (
                                        <div className="flex flex-col items-center">
                                            <Activity className="w-12 h-12 text-stone-900 mb-4 animate-bounce" />
                                            <p className="font-bold animate-pulse">PARSING_GEOMETRY...</p>
                                        </div>
                                    ) : (
                                        <>
                                            <Upload className="w-10 h-10 mx-auto text-stone-400 group-hover:text-stone-900 mb-4" />
                                            <p className="font-bold text-stone-900">INITIATE UPLOAD</p>
                                            <p className="text-[10px] text-stone-500 mt-2">[ .STL FILES ONLY ]</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {step > 1 && (
                                <div className="mt-4 flex items-center justify-between bg-stone-100 p-4 border border-stone-300">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-stone-900" size={20} />
                                        <div>
                                            <p className="font-bold uppercase max-w-[150px] truncate">{file?.name || 'ERR_NO_NAME'}</p>
                                            <p className="text-[10px] text-stone-500">HASH: {Math.random().toString(36).substring(7)}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => { setStep(1); setParsedGeometry(null); }} className="text-[10px] underline hover:bg-stone-900 hover:text-white px-2 py-1">RESTART_SEQUENCE</button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* STEP 2: CONFIG */}
                    {step >= 2 && (
                        <div className={`border-2 border-stone-900 bg-white p-1 relative shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]`}>
                            <div className="border border-stone-200 p-6">
                                <div className="absolute top-0 left-0 bg-stone-900 text-white text-[10px] px-2 py-1">STEP_02 // MAT_CONFIG</div>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-[10px] font-bold block mb-2 text-stone-500">SELECT_SUBSTRATE</label>
                                        <div className="space-y-2">
                                            {['PLA', 'PETG', 'RESIN'].map(m => (
                                                <button
                                                    key={m}
                                                    onClick={() => { setMaterial(m); addLog(`MATERIAL SET TO: ${m}`); }}
                                                    className={`w-full text-left px-4 py-2 border font-bold text-sm flex justify-between items-center ${material === m ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300 hover:border-stone-500'}`}
                                                >
                                                    <span>{m}</span>
                                                    {material === m && <div className="w-1.5 h-1.5 bg-white animate-pulse" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-xs space-y-4">
                                        <div className="border-l-2 border-stone-300 pl-3">
                                            <p className="text-stone-500 text-[10px] mb-1">CALC_VOLUME</p>
                                            <p className="font-bold">{volume.toFixed(2)} cmÂ³</p>
                                        </div>
                                        <div className="border-l-2 border-stone-300 pl-3">
                                            <p className="text-stone-500 text-[10px] mb-1">TIME_EST</p>
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
                    <div className="border-2 border-stone-900 bg-white p-1 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                        <div className="flex justify-between items-center mb-1 px-1 bg-stone-200">
                            <span className="text-[10px] font-bold text-stone-500 px-2 py-1">LIDAR_PREVIEW</span>
                            <span className="text-[10px] text-stone-900 animate-pulse px-2">â REC</span>
                        </div>
                        {step >= 2 ? (
                            <PreviewScene materialType={material} uploadedGeometry={parsedGeometry} />
                        ) : (
                            <div className="w-full h-64 bg-stone-800 flex flex-col items-center justify-center border-b border-stone-700">
                                <div className="w-full h-[1px] bg-stone-600 animate-pulse mb-4 w-3/4"></div>
                                <p className="text-[10px] text-stone-500 text-center">AWAITING_DATA_STREAM</p>
                                <div className="w-full h-[1px] bg-stone-600 animate-pulse mt-4 w-1/2"></div>
                            </div>
                        )}
                        <div className="bg-stone-900 p-3 h-32 overflow-hidden font-mono text-[10px] text-green-500">
                            {consoleLog.map((log, i) => <div key={i} className="opacity-80">{log}</div>)}
                            <div className="animate-pulse">_</div>
                        </div>
                    </div>

                    {step >= 2 && (
                        <div className="bg-white text-stone-900 p-1 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                            <div className="p-4 border border-stone-200">
                                <div className="flex justify-between items-end mb-4 border-b border-stone-900 pb-4 border-dashed">
                                    <div>
                                        <p className="text-[10px] text-stone-500">TOTAL_REQUISITION</p>
                                        <h3 className="text-3xl font-bold">${getPrice()}</h3>
                                    </div>
                                    <p className="text-xs text-stone-400 mb-1">USD</p>
                                </div>
                                <button
                                    onClick={() => addToCart({
                                        id: `FAB-${Math.floor(Math.random() * 1000)}`,
                                        name: `CUST_PART: ${file?.name || 'UNTITLED'}`,
                                        price: parseFloat(getPrice()),
                                        category: 'CUSTOM',
                                        specs: [material, 'CUSTOM_FAB']
                                    })}
                                    className="w-full bg-stone-900 text-white font-bold py-3 hover:bg-stone-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-sm"
                                >
                                    <Terminal size={14} />
                                    [ COMPILE_ORDER ]
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

// 9. PRODUCT CARD
const ProductCard = ({ product, addToCart }) => (
    <div className="group border-2 border-stone-900 bg-white hover:shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] transition-all duration-200 flex flex-col h-full relative p-1">
        <div className="absolute top-0 right-0 p-1">
            <div className="w-2 h-2 border border-stone-900 rounded-full bg-transparent group-hover:bg-green-500 transition-colors"></div>
        </div>

        <div className="h-48 bg-stone-100 border-b border-stone-900 relative overflow-hidden p-4 flex items-center justify-center">
            <div className="absolute top-2 left-2 text-[10px] font-bold bg-white border border-stone-900 px-1 z-10">
                {product.id}
            </div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>

            <div className="w-24 h-24 border border-dashed border-stone-400 rounded-full flex items-center justify-center bg-white z-10 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0">
                {product.category === 'DIGITAL' ? <FileText size={40} className="text-stone-800" /> : product.category === 'ZERO_DAY' ? <Unlock size={40} className="text-red-600" /> : <Cpu size={40} className="text-stone-800" />}
            </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-none w-2/3">{product.name}</h3>
                <span className="font-bold text-stone-900 bg-stone-200 px-1 text-sm">${product.price}</span>
            </div>
            <p className="text-xs text-stone-600 mb-4 flex-grow leading-relaxed">{product.description}</p>

            <div className="space-y-2 mt-auto">
                <div className="flex flex-wrap gap-1">
                    {product.specs.map(s => (
                        <span key={s} className="text-[9px] border border-stone-300 px-1 text-stone-500">{s}</span>
                    ))}
                </div>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-transparent border border-stone-900 text-stone-900 text-xs font-bold py-2 hover:bg-stone-900 hover:text-white active:bg-stone-700 flex justify-center items-center gap-2 uppercase transition-colors"
                >
                    Add_To_Cart <ChevronRight size={12} />
                </button>
            </div>
        </div>
    </div>
);

// 10. ARCHIVE
const Archive = ({ posts }) => (
    <div className="max-w-4xl mx-auto p-4 md:p-8 relative z-10">
        <div className="mb-8 border-l-4 border-stone-900 pl-4 py-2">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Archive<br />_Log</h1>
            <p className="text-xs mt-2 max-w-lg text-stone-500 uppercase">
            // Accessing Homesteader Labs Public Research Terminal<br />
            // All entries immutable
            </p>
        </div>
        <div className="space-y-12">
            {posts.map((post, idx) => (
                <div key={post.id} className="group relative">
                    <div className="absolute -left-3 top-0 bottom-0 w-[1px] bg-stone-300 group-hover:bg-stone-900 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-stone-900 text-white text-[10px] px-1">{post.id}</span>
                        <span className="text-[10px] text-stone-500">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 uppercase decoration-stone-400 underline decoration-1 underline-offset-4">{post.title}</h3>
                    <p className="text-sm text-stone-800 leading-relaxed mb-4 max-w-2xl border-l-2 border-stone-200 pl-4 py-1 group-hover:border-stone-500 transition-colors">
                        {post.content}
                    </p>
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-[10px] text-stone-400 uppercase border border-stone-200 px-1 rounded-sm hover:border-stone-900 hover:text-stone-900 cursor-default">#{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// 11. CART DRAWER
const CartDrawer = ({ cart, isOpen, setIsOpen, removeFromCart, openCheckout }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex justify-end bg-stone-900/20 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div className="w-full max-w-md bg-[#e8e6e1] h-full shadow-2xl flex flex-col border-l-2 border-stone-900 font-mono" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b border-stone-900 flex justify-between items-center bg-stone-900 text-white">
                    <h2 className="font-bold text-sm uppercase flex items-center gap-2">
                        <Terminal size={14} /> REQUISITION_LOG
                    </h2>
                    <button onClick={() => setIsOpen(false)}><X size={18} /></button>
                </div>

                {/* Persistence Simulator */}
                <div className="bg-stone-800 text-xs text-stone-400 p-2 flex items-center gap-2 border-b border-stone-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    SYNCING TO OFFLINE NODE...
                </div>

                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center text-stone-400 mt-20 flex flex-col items-center">
                            <Wind className="w-12 h-12 mb-4 opacity-50" />
                            <p className="text-xs">BUFFER_EMPTY</p>
                        </div>
                    ) : (
                        cart.map((item, idx) => (
                            <div key={`${item.id}-${idx}`} className="bg-white p-3 border border-stone-300 shadow-[2px_2px_0px_0px_rgba(28,25,23,0.5)] flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] font-bold text-stone-400">{item.id}</p>
                                    <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                                    <div className="flex gap-2 mt-1">
                                        {item.specs && item.specs.slice(0, 2).map(s => (
                                            <span key={s} className="text-[9px] bg-stone-100 px-1">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">${item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(idx)}
                                        className="text-[10px] text-red-600 hover:bg-red-50 px-1 mt-1 uppercase"
                                    >
                                        [ DELETE ]
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-stone-300 bg-white">
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-xs text-stone-500">TOTAL_COST</span>
                        <span className="text-2xl font-black">${total}</span>
                    </div>
                    <button
                        onClick={() => openCheckout(total)}
                        className="w-full bg-stone-900 text-white font-bold py-4 hover:bg-stone-800 flex justify-center gap-2 uppercase text-sm group"
                    >
                        <Zap size={16} className="group-hover:text-yellow-400 transition-colors" />
                        Process_Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MAIN APP ---
const App = () => {
    const [view, setView] = useState('HOME');
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [booting, setBooting] = useState(true);

    // New States
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isJsonEditorOpen, setIsJsonEditorOpen] = useState(false);
    const [checkoutTotal, setCheckoutTotal] = useState(0);
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [secretInput, setSecretInput] = useState('');

    // Archive State (persisted)
    const [archive, setArchive] = useState(() => {
        try {
            const saved = localStorage.getItem('hl_archive');
            return saved ? JSON.parse(saved) : DEFAULT_ARCHIVE_POSTS;
        } catch (e) {
            return DEFAULT_ARCHIVE_POSTS;
        }
    });

    // Save Archive to LocalStorage
    useEffect(() => {
        try {
            localStorage.setItem('hl_archive', JSON.stringify(archive));
        } catch (e) { }
    }, [archive]);

    // Initial Load Cart
    useEffect(() => {
        const savedCart = localStorage.getItem('homesteader_cart');
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    // Save Cart
    useEffect(() => {
        localStorage.setItem('homesteader_cart', JSON.stringify(cart));
    }, [cart]);

    // Global Key Listener for Secret Code & Terminal
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Toggle Terminal
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 't') {
                e.preventDefault();
                setIsTerminalOpen(prev => !prev);
            }

            // Secret Code Buffer
            if (/^[a-zA-Z]$/.test(e.key)) {
                setSecretInput(prev => {
                    const updated = (prev + e.key.toUpperCase()).slice(-10); // Keep last 10 chars
                    if (updated === 'WALKINGMAN') {
                        // Unlock Secret
                        if (!products.find(p => p.id === 'WLK-MN-EXE')) {
                            setProducts(prev => [SECRET_PRODUCT, ...prev]);
                            alert(">> SYSTEM ALERT: CLASSIFIED PROTOCOL UNLOCKED"); // Brutalist alert
                        }
                    }
                    return updated;
                });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [products]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const handleNav = (v) => {
        if (v === 'CART') setIsCartOpen(true);
        else setView(v);
    };

    const handleCheckout = (total) => {
        setCheckoutTotal(total);
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    }

    return (
        <div className="min-h-screen bg-[#e8e6e1] text-stone-900 font-mono selection:bg-stone-900 selection:text-white flex flex-col relative overflow-x-hidden">
            {booting && <BootSequence onComplete={() => setBooting(false)} />}

            <BioMonitor />

            {/* Overlays */}
            <TerminalOverlay
                isOpen={isTerminalOpen}
                onClose={() => setIsTerminalOpen(false)}
                cart={cart}
                products={products}
                archive={archive}
                openJsonEditor={() => setIsJsonEditorOpen(true)}
            />

            <JsonEditor
                isOpen={isJsonEditorOpen}
                onClose={() => setIsJsonEditorOpen(false)}
                data={archive}
                onSave={(newData) => setArchive(newData)}
            />

            <PaymentModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} total={checkoutTotal} />

            <Navigation setView={handleNav} cartCount={cart.length} currentView={view} />

            <main className="flex-grow relative z-10">
                {view === 'HOME' && (
                    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
                        <div className="max-w-5xl w-full border-2 border-stone-900 p-8 md:p-20 bg-white/90 backdrop-blur-sm shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] relative">
                            {/* Decorative Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-stone-900"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-stone-900"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-stone-900"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-stone-900"></div>

                            <div className="absolute top-4 left-4 text-[9px] border border-stone-400 px-1 text-stone-400 uppercase">
                                Sys_Ready
                            </div>
                            <div className="absolute top-4 right-4 flex gap-2 items-center">
                                <span className="text-[9px] text-stone-400">BIOSYNTH_MONITOR</span>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>

                            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                                HOMESTEADER<br />LABS
                            </h1>
                            <div className="w-full h-px bg-stone-300 my-6"></div>
                            <p className="text-sm md:text-base max-w-2xl mx-auto mb-10 text-stone-600 uppercase tracking-wide">
                    // Eco-brutalist fabrication for the post-industrial frontier.<br />
                    // Precision hardware for walking men.<br />
                    // Digital artifacts for distributed manufacture.
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
                                    className="bg-transparent text-stone-900 px-8 py-4 font-bold hover:bg-stone-100 transition-all border border-stone-900 text-sm uppercase tracking-widest"
                                >
                                    Upload_Schematic
                                </button>
                            </div>
                        </div>

                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl opacity-60">
                            {['PRECISION', 'DURABILITY', 'LOCALITY', 'AUTONOMY'].map((w, i) => (
                                <div key={w} className="border-t border-stone-500 pt-2 text-[10px] tracking-[0.2em] text-center">
                                    0{i + 1} // {w}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {view === 'SHOP' && (
                    <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
                        <div className="flex justify-between items-end mb-8 border-b-2 border-stone-900 pb-2 bg-white/50 p-4">
                            <h2 className="text-2xl font-bold uppercase">Hardware_Index</h2>
                            <div className="text-[10px] text-stone-500 text-right">
                                <p>DATABASE_V.4.2</p>
                                <p>RECORDS_FOUND: {products.length}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map(p => (
                                <ProductCard key={p.id} product={p} addToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                )}

                {view === 'ARCHIVE' && <Archive posts={archive} />}

                {view === 'FABRICATION' && <FabWizard addToCart={addToCart} />}
            </main>

            <CartDrawer
                cart={cart}
                isOpen={isCartOpen}
                setIsOpen={setIsCartOpen}
                removeFromCart={removeFromCart}
                openCheckout={handleCheckout}
            />

            <footer className="bg-stone-900 text-stone-400 py-12 px-4 mt-12 border-t-4 border-stone-500 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2"><Box size={14} /> HOMESTEADER_LABS</h4>
                        <p>RELAY STATION: WATERFORD, CT</p>
                        <p>SECTOR: 7G</p>
                        <p className="mt-4 text-stone-500">// ALL DESIGNS OPEN SOURCE WHERE APPLICABLE.</p>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-4 uppercase">Direct_Link</h5>
                        <ul className="space-y-2">
                            <li><button onClick={() => setView('SHOP')} className="hover:text-white hover:underline decoration-1 underline-offset-4">[ HARDWARE ]</button></li>
                            <li><button onClick={() => setView('SHOP')} className="hover:text-white hover:underline decoration-1 underline-offset-4">[ DIGITAL ]</button></li>
                            <li><button onClick={() => setView('ARCHIVE')} className="hover:text-white hover:underline decoration-1 underline-offset-4">[ MANIFESTO ]</button></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-4 uppercase">Protocol</h5>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">TERMS_OF_FABRICATION</li>
                            <li className="hover:text-white cursor-pointer">WARRANTY (VOID)</li>
                            <li className="hover:text-white cursor-pointer">PRIVACY_HASH</li>
                        </ul>
                    </div>
                    <div className="border border-stone-700 p-4">
                        <p className="mb-2 text-stone-500 uppercase text-[10px]">Data_Feed_Subscription</p>
                        <div className="flex bg-stone-800 border border-stone-600">
                            <input type="email" placeholder="USER@NET.LOC" className="bg-transparent w-full p-2 text-white outline-none placeholder:text-stone-600 font-mono text-xs" />
                            <button className="px-3 hover:bg-stone-700 text-white"><ChevronRight size={14} /></button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-stone-800 text-center text-[10px] tracking-widest uppercase text-stone-600">
                    Â© 2024 Homesteader Labs // Built for the long haul
                </div>
            </footer>
        </div>
    );
};

export default App;
