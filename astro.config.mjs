import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Legacy bare tool URLs (pre-/tool/ move) and /games/ → /game/
const legacyToolSlugs = [
  'age-calculator',
  'favicon-generator',
  'font-generator',
  'image-compressor',
  'json-formatter',
  'password-generator',
  'pdf-merger',
  'picker-wheel',
  'qr-code-generator',
  'speed-test',
  'word-counter',
];

const legacyGameSlugs = [
  'aetherforge',
  'emoji-geography',
  'emoji-memory',
  'rock-paper-scissors',
  'word-scramble',
];

/** @type {Record<string, { status: 301; destination: string }>} */
const redirects = Object.fromEntries([
  ...legacyToolSlugs.map((slug) => [
    `/${slug}/`,
    { status: 301, destination: `/tool/${slug}/` },
  ]),
  ['/games/', { status: 301, destination: '/game/' }],
  ...legacyGameSlugs.map((slug) => [
    `/games/${slug}/`,
    { status: 301, destination: `/game/${slug}/` },
  ]),
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://zippywidgets.online',
  output: 'static',
  outDir: './dist',
  trailingSlash: 'always',
  redirects,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
});
