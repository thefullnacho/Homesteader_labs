import React from 'react';
import { X } from 'lucide-react';

const LegalModal = ({ title, content, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[220] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
            <div className="bg-stone-900 border border-stone-500 text-stone-300 p-8 max-w-2xl w-full font-mono relative shadow-2xl" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-white"><X /></button>
                <h2 className="text-xl font-bold uppercase mb-6 text-white border-b border-stone-700 pb-2">{title}</h2>
                <div className="text-xs leading-relaxed whitespace-pre-wrap font-mono">
                    {content}
                </div>
                <div className="mt-8 pt-4 border-t border-stone-800 text-right">
                    <button onClick={onClose} className="bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 text-xs uppercase font-bold">
                        [ ACKNOWLEDGE ]
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
