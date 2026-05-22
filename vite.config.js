import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/zad_6/',
  plugins: [
    tailwindcss(),
  ],
});