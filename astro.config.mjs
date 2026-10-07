// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Correct import for Tailwind v4
// import node from '@astrojs/node'; // Uncomment if deploying to VPS/self-hosted
// import vercel from '@astrojs/vercel'; // Uncomment if deploying to Vercel
import tunnel from "astro-tunnel";

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  
  // CRITICAL: Enables SSR so middleware and cookies work
  output: 'server', 
  
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

  // Combine ALL integrations into ONE array
  integrations: [tunnel()]
});