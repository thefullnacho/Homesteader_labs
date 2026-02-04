import React, { useRef, useEffect } from 'react';

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
            ctx.strokeStyle = 'rgba(163, 193, 173, 0.1)';
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

export default BioMonitor;
