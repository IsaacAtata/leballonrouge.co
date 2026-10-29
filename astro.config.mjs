// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
import vercel from '@astrojs/vercel/serverless'; // ✅ CHANGED FROM '@astrojs/node'

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'server', 
  adapter: vercel(), // ✅ CHANGED FROM node({ mode: 'standalone' })
  
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ['.ngrok-free.dev'] }
  },

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: false }
  },
  integrations: []
});