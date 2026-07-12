import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zippywidgets.online',
  output: 'static',
  outDir: './dist',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
});
