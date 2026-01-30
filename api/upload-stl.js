import { put } from '@vercel/blob';
import crypto from 'crypto';

// --- UTILS: STL PARSER (Server-Side) ---
const parseSTL = (buffer) => {
    // buffer is a Node.js Buffer. We need a DataView.
    // Create a DataView over the underlying ArrayBuffer
    const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    let offset = 80;
    
    // Safety check for file size
    if (view.byteLength < 84) {
       throw new Error("File too small to be a valid binary STL");
    }

    const triangleCount = view.getUint32(offset, true);
    offset += 4;

    let volume = 0;

    // Safety check for expected file size based on triangle count
    // 80 header + 4 count + (50 bytes per triangle)
    const expectedSize = 84 + (triangleCount * 50);
    if (view.byteLength !== expectedSize) {
        // Warn but proceed, or throw. Some exporters add extra bytes.
        // For security, strict checking is better, but might break valid files.
        // Let's rely on the loop bounds.
    }

    for (let i = 0; i < triangleCount; i++) {
        // Boundary check
        if (offset + 50 > view.byteLength) break;

        offset += 12; // Skip Normal
        const p1 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;
        const p2 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;
        const p3 = { x: view.getFloat32(offset, true), y: view.getFloat32(offset + 4, true), z: view.getFloat32(offset + 8, true) };
        offset += 12;

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

    return Math.abs(volume) / 1000; // cm3
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, filename, material } = req.body; // Ignore client 'volume'
    if (!file) {
      return res.status(400).json({ error: 'Missing file' });
    }

    // UNIQUE FILENAME: Append ISO timestamp to avoid collisions
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const uniqueFilename = `${filename.split('.')[0]}_${timestamp}.${filename.split('.').pop()}`;

    // Decode base64 to buffer
    const buffer = Buffer.from(file, 'base64');

    // 1. SECURITY: Validate Volume Server-Side
    let calculatedVolume = 0;
    try {
        calculatedVolume = parseSTL(buffer);
        console.log(`Server-side volume calc: ${calculatedVolume} cm3`);
    } catch (e) {
        console.error("STL Parse Error", e);
        return res.status(400).json({ error: 'Invalid STL file' });
    }

    const blob = await put(uniqueFilename, buffer, { 
      access: 'public',
    });

    // PRICING: Match UI formula
    const baseRate = 0.85; // $ per cm³
    const materialMult = material === 'RESIN' ? 2.0 : material === 'PETG' ? 1.5 : 1.0; // PLA default
    const setupFee = 15.00;
    
    const price = ((calculatedVolume * baseRate * materialMult) + setupFee).toFixed(2);

    // 2. SECURITY: Sign the price
    // Use STRIPE_SECRET_KEY as a secret key for HMAC (since it's already a secret env var)
    // Payload to sign: price + currency (usd assumed) + material (to prevent swapping cheap PLA price for Resin)
    const payload = `${price}:usd:${material}`;
    const signature = crypto
        .createHmac('sha256', process.env.STRIPE_SECRET_KEY)
        .update(payload)
        .digest('hex');

    res.status(200).json({
      url: blob.url,
      volume: calculatedVolume.toFixed(1),
      price,
      signature, // Return signature to client
      filename: uniqueFilename
    });
  } catch (error) {
    console.error('Blob upload error', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}