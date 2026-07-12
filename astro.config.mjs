import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zippywidgets.online',
  output: 'static',
  outDir: './dist',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      customPages: [
        'https://zippywidgets.online/game/',
        'https://zippywidgets.online/game/aetherforge/',
        'https://zippywidgets.online/game/word-scramble/',
        'https://zippywidgets.online/game/emoji-memory/',
        'https://zippywidgets.online/game/emoji-geography/',
        'https://zippywidgets.online/game/rock-paper-scissors/',
      ],
    }),
  ],
  build: {
    format: 'directory'
  }
});
