// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
import vercel from '@astrojs/vercel/serverless'; 

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'server', 
  
  // ✅ ADD THIS CONFIGURATION OBJECT
  adapter: vercel({
    runtime: 'nodejs20.x' 
  }),
  
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