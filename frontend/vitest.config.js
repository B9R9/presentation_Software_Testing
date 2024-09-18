import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/setupTests.js', // Optionnel, si tu as des configurations globales pour les tests
  },
});
