import { copyFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

// For a small site, serve a flat sitemap.xml so Google doesn't need to fetch a nested index.
await copyFile(join(dist, 'sitemap-0.xml'), join(dist, 'sitemap.xml'));
// Remove the now-redundant index file to avoid confusion.
await rm(join(dist, 'sitemap-index.xml'), { force: true });

console.log('postbuild: sitemap.xml flattened');
