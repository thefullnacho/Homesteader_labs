import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('hl_dark_mode');
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('hl_dark_mode', JSON.stringify(isDark));
    }, [isDark]);

    const toggleDarkMode = () => setIsDark(prev => !prev);

    return { isDark, toggleDarkMode };
};

export default useDarkMode;
