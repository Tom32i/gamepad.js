import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'gamepad',
      fileName: 'gamepad',
    },
  },
  resolve: {
    alias: {
      '@gamepad': resolve(__dirname, './src'),
    },
  },
  preview: {
    host: true,
    port: 8080,
  },
})
