import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since you are using a custom domain (ai-studio.wiki), base should be '/'
  base: '/', 
  define: {
    // CRITICAL: This polyfills process.env so the app doesn't crash when accessing API_KEY
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  }
});
