import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 3000
    },
    watch: {
      usePolling: true
    },
    cors: true,
    proxy: {}
  }
})
