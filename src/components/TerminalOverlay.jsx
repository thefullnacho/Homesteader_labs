import React, { useState, useEffect, useRef } from 'react';

const TerminalOverlay = ({ isOpen, onClose, cart, products }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        'HOMESTEADER LABS TERMINAL ACCESS [v4.2.0]',
        'ENTER "help" FOR COMMAND LIST',
        '----------------------------------------'
    ]);
    const [mode, setMode] = useState('TERMINAL'); // 'TERMINAL' | 'EDITOR'
    const [editorData, setEditorData] = useState({ title: '', date: '', tags: '', content: '' });

    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [history, isOpen]);

    useEffect(() => {
        if (isOpen && mode === 'TERMINAL' && inputRef.current) inputRef.current.focus();
    }, [isOpen, mode]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const args = cmd.split(' ');
            let response = '';

            switch (args[0]) {
                case 'help':
                    response = 'COMMANDS: ls, cat [id], write, clear, whoami, exit';
                    break;
                case 'ls':
                    if (args[1] === '/shop' || !args[1]) {
                        response = `DIR /SHOP:\n${products.map(p => `${p.id}  <${p.category}>`).join('\n')}`;
                    } else {
                        response = 'DIRECTORIES: /shop, /sys';
                    }
                    break;
                case 'cat':
                    const id = args[1]?.toUpperCase();
                    const prod = products.find(p => p.id === id);
                    if (prod) response = `READING ${id}...\nNAME: ${prod.name}\nPRICE: $${prod.price}\nDESC: ${prod.description}`;
                    else response = `ERR: FILE ${id} NOT FOUND`;
                    break;
                case 'write':
                    setMode('EDITOR');
                    setEditorData({
                        title: '',
                        date: new Date().toISOString().split('T')[0],
                        tags: 'log, update',
                        content: ''
                    });
                    setHistory(prev => [...prev, `> ${input}`, 'STARTING FIELD_RECORDER_V1...']);
                    setInput('');
                    return;
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

    const handleSaveLog = () => {
        const slug = editorData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const filename = `log-${Date.now()}-${slug}.mdx`; // Timestamp based filename

        const fileContent = `---
title: "${editorData.title}"
date: "${editorData.date}"
tags: [${editorData.tags.split(',').map(t => `"${t.trim()}"`).join(', ')}]
slug: "${slug}"
---

${editorData.content}
`;

        const blob = new Blob([fileContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setHistory(prev => [...prev, `FILE SAVED: ${filename}`, 'LOCAL STORAGE SUCCESSFUL', ' ']);
        setMode('TERMINAL');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] bg-[#1b2612]/98 text-theme-main font-mono text-xs md:text-sm p-4 md:p-8 flex flex-col font-bold" onClick={() => mode === 'TERMINAL' && inputRef.current?.focus()}>
            <div className="flex justify-between border-b border-theme-main/30 pb-2 mb-4">
                <span>{mode === 'EDITOR' ? 'FIELD_RECORDER_ACTIVE' : 'TERMINAL_SESSION_ACTIVE'}</span>
                <span className="cursor-pointer hover:text-white" onClick={onClose}>[X] TERMINATE</span>
            </div>

            {mode === 'TERMINAL' ? (
                <>
                    <div className="flex-grow overflow-y-auto whitespace-pre-wrap font-normal">
                        {history.map((line, i) => <div key={i}>{line}</div>)}
                        <div ref={bottomRef} />
                    </div>
                    <div className="flex items-center gap-2 mt-4 border-t border-theme-main/30 pt-4">
                        <span>user@homesteader:~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            className="bg-transparent outline-none flex-grow text-white caret-[var(--accent)]"
                            autoFocus
                        />
                    </div>
                </>
            ) : (
                <div className="flex-grow flex flex-col gap-4 text-theme-main">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] text-theme-sub mb-1">TITLE</label>
                            <input
                                type="text"
                                className="w-full bg-[#24331a] border border-theme-main/30 p-2 text-white outline-none focus:border-[var(--accent)]"
                                value={editorData.title}
                                onChange={e => setEditorData({ ...editorData, title: e.target.value })}
                                placeholder="ENTER_TITLE"
                                autoFocus
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] text-theme-sub mb-1">DATE (YYYY-MM-DD)</label>
                            <input
                                type="text"
                                className="w-full bg-[#24331a] border border-theme-main/30 p-2 text-white outline-none focus:border-[var(--accent)]"
                                value={editorData.date}
                                onChange={e => setEditorData({ ...editorData, date: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] text-theme-sub mb-1">TAGS (COMMA SEPARATED)</label>
                        <input
                            type="text"
                            className="w-full bg-[#24331a] border border-theme-main/30 p-2 text-white outline-none focus:border-[var(--accent)]"
                            value={editorData.tags}
                            onChange={e => setEditorData({ ...editorData, tags: e.target.value })}
                        />
                    </div>
                    <div className="flex-grow flex flex-col">
                         <label className="block text-[10px] text-theme-sub mb-1">CONTENT (MARKDOWN SUPPORTED)</label>
                        <textarea
                            className="flex-grow w-full bg-[#24331a] border border-theme-main/30 p-4 text-white outline-none resize-none focus:border-[var(--accent)] font-mono"
                            value={editorData.content}
                            onChange={e => setEditorData({ ...editorData, content: e.target.value })}
                            placeholder="BEGIN TRANSMISSION..."
                        />
                    </div>
                    <div className="flex justify-end gap-4 border-t border-theme-main/30 pt-4">
                        <button
                            onClick={() => setMode('TERMINAL')}
                            className="px-4 py-2 border border-theme-main/30 text-theme-sub hover:text-white hover:border-white"
                        >
                            [ CANCEL ]
                        </button>
                        <button
                            onClick={handleSaveLog}
                            className="px-4 py-2 bg-[var(--accent)] text-white hover:brightness-110"
                        >
                            [ ENCRYPT & EXPORT ]
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TerminalOverlay;
