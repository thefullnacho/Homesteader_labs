import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, filename, volume } = req.body;  // Multipart? Use formidable if needed, but assume base64 for simple
    if (!file || !volume) {
      return res.status(400).json({ error: 'Missing file or volume' });
    }

    const blob = await put(filename, Buffer.from(file, 'base64'), {
      access: 'public',
    });

    const price = (volume * 0.10 + 5).toFixed(2);  // $0.10/cm³ + $5 base

    res.status(200).json({ 
      url: blob.url, 
      volume: volume.toFixed(1), 
      price: price 
    });
  } catch (error) {
    console.error('Blob upload error', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}