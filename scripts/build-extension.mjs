import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const distDir = 'dist';

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

// Copy essential files
for (const f of ['manifest.json']) {
  fs.copyFileSync(f, path.join(distDir, f));
}

fs.cpSync('src', path.join(distDir, 'src'), { recursive: true });
fs.cpSync('icons', path.join(distDir, 'icons'), { recursive: true });

// Create ZIP of the dist directory
const output = fs.createWriteStream(path.join(distDir, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.directory(distDir, false);
archive.pipe(output);
await archive.finalize();

console.log('Build gerado em dist/ e dist/extension.zip');
