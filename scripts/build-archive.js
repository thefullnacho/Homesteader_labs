import { getArchiveLogs } from '../lib/archive.js';
import fs from 'fs';
import path from 'path';

// Generate archive data at build time
const archiveData = getArchiveLogs();

// Write to public/data so it can be imported
const outputPath = path.join(process.cwd(), 'public', 'data', 'archive.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(archiveData, null, 2));

console.log(`✅ Generated archive data: ${archiveData.length} posts`);
console.log(`📁 Output: ${outputPath}`);
