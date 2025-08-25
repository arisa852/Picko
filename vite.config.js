import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { readFileSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: readFileSync('./localhost-key.pem'),
      cert: readFileSync('./localhost.pem'),
    },
    host: 'localhost',
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'fast-deep-equal': path.resolve(__dirname, 'node_modules/fast-deep-equal/es6/index.js'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/style/base.scss" as *;`,
      },
    },
  },
})
