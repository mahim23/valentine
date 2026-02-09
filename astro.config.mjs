// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://mahim23.github.io',
  base: '/valentine',
  // Static site generation for GitHub Pages
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: 'dev-dsk-agramahi-2a-1c64f259.us-west-2.amazon.com',
    port: 4321
  }
});
