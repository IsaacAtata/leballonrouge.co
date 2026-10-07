// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
import node from '@astrojs/node'; // ✅ Use Node instead of Vercel

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  
  // CRITICAL: Enables SSR so middleware and cookies work
  output: 'server', 

  // ✅ Point to the Node standalone adapter
  adapter: node({
    mode: 'standalone',
  }),
  
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.ngrok-free.dev']
    }
  },

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: []
});