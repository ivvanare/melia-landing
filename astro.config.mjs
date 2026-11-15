// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Production origin. Change this one value to the real domain when it is known:
// it drives canonical URLs, Open Graph metadata and the sitemap.
export const SITE_URL = 'https://melia.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
