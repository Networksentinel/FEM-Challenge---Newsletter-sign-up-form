import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/FEM-Challenge---Newsletter-sign-up-form/',
  plugins: [
    tailwindcss(),
  ],
});