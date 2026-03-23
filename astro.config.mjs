// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import tunnel from "astro-tunnel";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [tunnel()]
});