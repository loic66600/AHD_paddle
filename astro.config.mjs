import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // L'adresse de votre profil GitHub
  site: 'https://loic66600.github.io',
  // Le nom exact de votre dépôt GitHub (avec le slash au début)
  base: '/AHD_paddle',
});


