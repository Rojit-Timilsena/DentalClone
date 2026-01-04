import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  
  // Development optimizations
  server: {
    hmr: {
      overlay: false
    }
  },
  
  build: {
    // Production optimizations
    minify: 'terser',
    sourcemap: false,
    target: 'es2015',
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    
    rollupOptions: {
      output: {
        // Optimized chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          carousel: ['swiper'],
          animations: ['wowjs'],
          utils: ['moment', 'moment-timezone', 'jquery', 'jquery.easing'],
          bootstrap: ['bootstrap']
        },
        // Optimize asset naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    
    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    
    // Enable gzip compression hints
    reportCompressedSize: true
  },
  
  // Asset optimization
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.gif', '**/*.webp'],
  
  // Base path for deployment
  base: './',
  
  // CSS preprocessing optimizations
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'swiper',
      'jquery',
      'bootstrap'
    ],
    exclude: ['wowjs']
  }
})
