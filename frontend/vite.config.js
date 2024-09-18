// vitest.config.js
import svelte from 'rollup-plugin-svelte';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [svelte()],
  test: {
    environment: 'jsdom',
  },
});