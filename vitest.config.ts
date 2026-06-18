import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '#/compiled-registry': resolve(__dirname, '.wxt/compiled-registry.js'),
    },
  },
  test: {
    globals: true,
  },
});
