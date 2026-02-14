import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ['gsap'],
          lenis: ['lenis']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
