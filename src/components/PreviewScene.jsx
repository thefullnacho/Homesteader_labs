import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

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
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        rendererRef.current = renderer;

        // FULL RESOLUTION FOR POINT CLOUD
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);

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

            renderer.setSize(w, h);
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

        // POINT CLOUD MATERIAL
        const material = new THREE.PointsMaterial({
            color: color,
            size: 0.05,
            sizeAttenuation: true
        });

        const mesh = new THREE.Points(geometry, material);

        // Apply scale to mesh
        if (uploadedGeometry) {
            mesh.scale.set(scale, scale, scale);
        }

        meshRef.current = mesh;
        sceneRef.current.add(mesh);

    }, [materialType, uploadedGeometry]);

    return <div ref={mountRef} className="w-full h-64 border-b-2 border-stone-800 bg-stone-200 cursor-crosshair filter grayscale contrast-125" />;
};

export default PreviewScene;
