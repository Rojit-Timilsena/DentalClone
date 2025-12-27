import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for production
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap'],
          carousel: ['swiper'],
          animations: ['framer-motion', 'wowjs'],
          forms: ['react-hook-form', 'react-datepicker'],
          utils: ['moment', 'moment-timezone', 'jquery']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Asset optimization
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp'],
  // Base path for deployment
  base: './',
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  }
})
