import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const BUNKER_URL = 'https://relay.homesteaderlabs.com';

const Newsletter = () => {
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

    return (
        <div className="border border-stone-700 dark:border-stone-800 p-4">
            <p className="mb-2 text-stone-500 uppercase text-[10px]">Data_Feed_Subscription</p>
            <div className="flex bg-stone-800 dark:bg-black border border-stone-600 dark:border-stone-800">
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
                        'hover:bg-stone-700 dark:hover:bg-stone-800'
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
    );
};

export default Newsletter;
