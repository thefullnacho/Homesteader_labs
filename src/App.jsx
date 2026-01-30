import React, { useState, useEffect } from 'react';
import { Box, ChevronRight } from 'lucide-react';
import CartDrawer from './components/CartDrawer';
import Manifesto from './components/Manifesto';
import archiveData from '../public/data/archive.json';

// Components
import TerminalOverlay from './components/TerminalOverlay';
import BootSequence from './components/BootSequence';
import BioMonitor from './components/BioMonitor';
import LegalModal from './components/LegalModal';
import Navigation from './components/Navigation';

// Views
import HomeView from './views/HomeView';
import ShopView from './views/ShopView';
import ArchiveView from './views/ArchiveView';
import FabricationView from './views/FabricationView';
import WeatherView from './views/WeatherView';

const BUNKER_URL = 'https://relay.homesteaderlabs.com';

// --- DATA ---
const SECRET_PRODUCT = {
    id: 'WLK-MN-EXE',
    name: 'WALKING MAN SOURCE',
    price: 0.00,
    category: 'ZERO_DAY',
    description: '>> CLASSIFIED: Full schematic source code and firmware dumps for the MK1 prototype.',
    specs: ['ENCRYPTED', 'ROOT_ACCESS', 'DANGEROUS'],
    image: 'exe'
};

// --- MAIN APP ---
const App = () => {
    const [view, setView] = useState('HOME');
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Boot Persistence
    const [booting, setBooting] = useState(() => {
        return !localStorage.getItem('homesteader_booted');
    });

    // New States
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [secretInput, setSecretInput] = useState('');

    // Legal Modal State
    const [legalModal, setLegalModal] = useState({ isOpen: false, title: '', content: '' });

    // --- NEWSLETTER LOGIC ---
    const [subEmail, setSubEmail] = useState('');
    const [subStatus, setSubStatus] = useState('IDLE'); // IDLE, LOADING, SUCCESS, ERROR

    const handleSubscribe = async () => {
        if (!subEmail || !subEmail.includes('@')) return;
        setSubStatus('LOADING');

        try {
            const res = await fetch(`${BUNKER_URL}/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: subEmail }),
            });

            if (res.ok) {
                setSubStatus('SUCCESS');
                setSubEmail(''); // Clear input
                setTimeout(() => setSubStatus('IDLE'), 3000); // Reset after 3s
            } else {
                setSubStatus('ERROR');
            }
        } catch (err) {
            console.error(err);
            setSubStatus('ERROR');
        }
    };

    // Archive State (persisted)
    const [archive, setArchive] = useState(() => {
        try {
            // Clear old archive data to force reload from MDX
            localStorage.removeItem('hl_archive');
            return archiveData;
        } catch (e) {
            return archiveData;
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

        // Handle Stripe Success
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            setCart([]);
            localStorage.removeItem('homesteader_cart');
            alert(">> UPLINK CONFIRMED: REQUISITION_SUCCESSFUL. CHECK EMAIL FOR LOGISTICS.");
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    // Load Products from JSON
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/data/products.json');
                if (!response.ok) {
                    throw new Error(`Failed to fetch products: ${response.status}`);
                }
                const data = await response.json();
                setProducts(Array.isArray(data) ? data : []);
            } catch (error) {
                console.log('Error loading /data/products.json', error);
                setProducts([]);
            }
        };

        fetchProducts();
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
            />

            <Navigation setView={handleNav} cartCount={cart.length} currentView={view} />

            <main className="flex-grow relative z-10">
                {view === 'HOME' && <HomeView setView={setView} />}
                {view === 'SHOP' && <ShopView products={products} addToCart={addToCart} />}
                {view === 'ARCHIVE' && <ArchiveView posts={archive} />}
                {view === 'FABRICATION' && <FabricationView addToCart={addToCart} />}
                {view === 'WEATHER' && <WeatherView />}
                {view === 'MANIFESTO' && <Manifesto />}
            </main>

            <CartDrawer
              cart={cart}
              isOpen={isCartOpen}
              setIsOpen={setIsCartOpen}
              removeFromCart={removeFromCart}
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
                            <li><button onClick={() => { setView('SHOP'); window.scrollTo(0, 0); }} className="hover:text-white hover:underline decoration-1 underline-offset-4">[ HARDWARE ]</button></li>
                            <li><button onClick={() => { setView('MANIFESTO'); window.scrollTo(0, 0); }} className="hover:text-white hover:underline decoration-1 underline-offset-4">[ MANIFESTO ]</button></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-4 uppercase">Protocol</h5>
                        <ul className="space-y-2">
                            <li
                                onClick={() => setLegalModal({
                                    isOpen: true,
                                    title: 'TERMS_OF_FABRICATION',
                                    content: '>> AGREEMENT PROTOCOL V.1.0\n\n1. RISK ACKNOWLEDGMENT\nBy accessing this terminal and utilizing Homesteader Labs fabrication files, you acknowledge that all hardware is experimental. We are not responsible for structural failure, limb loss, or voided insurance policies.\n\n2. MODIFICATION\nYou are encouraged to modify, hack, and improve all designs. Closed systems are dead systems.\n\n3. LIABILITY\nHomesteader Labs exists in the gray zones. If you build it, you own the consequences.'
                                })} 
                                className="hover:text-white cursor-pointer"
                            >
                                TERMS_OF_FABRICATION
                            </li>
                            <li
                                onClick={() => setLegalModal({
                                    isOpen: true,
                                    title: 'WARRANTY (VOID)',
                                    content: '>> WARRANTY STATUS: VOID\n\nAll warranties were voided the moment you decided to take production into your own hands.\n\nThere is no customer support. There is only the community and the documentation.\n\nIf it breaks, fix it. If it doesn\'t work, iterate.'
                                })}
                                className="hover:text-white cursor-pointer"
                            >
                                WARRANTY (VOID)
                            </li>
                            <li
                                onClick={() => setLegalModal({
                                    isOpen: true,
                                    title: 'PRIVACY_HASH',
                                    content: '>> PRIVACY PROTOCOL\n\nWE DO NOT TRACK YOU.\nTHE NETWORK DOES.\n\nHomesteader Labs stores no cookies other than essential session data (cart, boot state). We do not sell your data because we do not collect it.\n\nStay safe out there.'
                                })}
                                className="hover:text-white cursor-pointer"
                            >
                                PRIVACY_HASH
                            </li>
                        </ul>
                    </div>
                    <div className="border border-stone-700 p-4">
                        <p className="mb-2 text-stone-500 uppercase text-[10px]">Data_Feed_Subscription</p>
                        <div className="flex bg-stone-800 border border-stone-600">
                            <input
                                type="email"
                                placeholder="USER@NET.LOC"
                                value={subEmail}
                                onChange={(e) => setSubEmail(e.target.value)}
                                className="bg-transparent w-full p-2 text-white outline-none placeholder:text-stone-600 font-mono text-xs"
                                disabled={subStatus === 'LOADING'}
                            />
                            <button
                                onClick={handleSubscribe}
                                disabled={subStatus === 'LOADING' || !subEmail || !subEmail.includes('@')}
                                className={`px-3 text-white ${ 
                                    subStatus === 'LOADING' ? 'bg-stone-600' :
                                    subStatus === 'SUCCESS' ? 'bg-green-700' :
                                    subStatus === 'ERROR' ? 'bg-red-700' :
                                    'hover:bg-stone-700'
                                }`}
                            >
                                {subStatus === 'LOADING' ? '...' :
                                 subStatus === 'SUCCESS' ? '✓' :
                                 subStatus === 'ERROR' ? '✗' :
                                 <ChevronRight size={14} />}
                            </button>
                        </div>
                        {subStatus === 'SUCCESS' && (
                            <p className="mt-2 text-green-400 text-[10px] font-mono">SUBSCRIPTION CONFIRMED</p>
                        )}
                        {subStatus === 'ERROR' && (
                            <p className="mt-2 text-red-400 text-[10px] font-mono">TRANSMISSION FAILED</p>
                        )}
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-stone-800 text-center text-[10px] tracking-widest uppercase text-stone-600">
                    © 2026 Homesteader Labs // Know your nature
                </div>
            </footer>

            <LegalModal
                isOpen={legalModal.isOpen}
                onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))}
                title={legalModal.title}
                content={legalModal.content}
            />
        </div>
    );
};

export default App;