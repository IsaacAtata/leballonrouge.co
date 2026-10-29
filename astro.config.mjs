import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 
// CHANGE THIS LINE:
import vercel from '@astrojs/vercel/serverless'; 

export default defineConfig({
  devToolbar: { enabled: false },
  output: 'server', 
  // CHANGE THIS LINE:
  adapter: vercel(), 
  
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