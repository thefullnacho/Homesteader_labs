import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, filename, volume } = req.body;
    if (!file || !volume) {
      return res.status(400).json({ error: 'Missing file or volume' });
    }

    // UNIQUE FILENAME: Append ISO timestamp to avoid collisions (e.g., "cube.stl" → "cube_2025-12-02T15-30-45Z.stl")
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Safe for filenames (no :, .)
    const uniqueFilename = `${filename.split('.')[0]}_${timestamp}.${filename.split('.').pop()}`;

    // Decode base64 to buffer
    const buffer = Buffer.from(file, 'base64');

    // Optional: If you had a head() existence check here, comment it out—no more "already exists" blocks
    // const existing = await get(filename); // Or head()—skip for uniques

    const blob = await put(uniqueFilename, buffer, { // ← CHANGED: uniqueFilename
      access: 'public',
    });

    const price = (volume * 0.10 + 5).toFixed(2);

    res.status(200).json({
      url: blob.url, // New unique URL
      volume: parseFloat(volume).toFixed(1),
      price,
      filename: uniqueFilename // Bonus: Return unique name for cart desc if needed
    });
  } catch (error) {
    console.error('Blob upload error', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}