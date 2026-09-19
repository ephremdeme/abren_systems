// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://abrensystems.com',
  build: { inlineStylesheets: 'always' }, // one small page: ship CSS inline, one request
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      fallbacks: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/IBMPlexSans-Regular-Latin1.woff2'] },
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/IBMPlexSans-Regular-Pi.woff2'], unicodeRange: ['U+2192'] },
          { weight: 500, style: 'normal', src: ['./src/assets/fonts/IBMPlexSans-Medium-Latin1.woff2'] },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: ['./src/assets/fonts/IBMPlexMono-Regular-Latin1.woff2'] },
        ],
      },
    },
  ],
});
