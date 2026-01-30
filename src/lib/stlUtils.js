// --- UTILS: STL PARSER ---
export const parseSTL = (buffer) => {
    const view = new DataView(buffer);
    let offset = 80;
    const triangleCount = view.getUint32(offset, true);
    offset += 4;

    const vertices = [];
    let volume = 0;
    let sampleVert1 = null;

    for (let i = 0; i < triangleCount; i++) {
        offset += 12; // Skip Normal
        const p1 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;
        const p2 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;
        const p3 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;

        if (i === 0) sampleVert1 = p1; // Capture first vertex for debugging

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

    console.log('STL Debug:', { triangleCount, sampleVert1, rawVolume: volume, finalVolume: Math.abs(volume) / 1000 });

    return {
        vertices: new Float32Array(vertices),
        volume: Math.abs(volume) / 1000 // cm3
    };
};
