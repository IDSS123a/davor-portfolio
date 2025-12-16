import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: Use './' instead of '/' so assets load correctly regardless of subdirectory/domain
  base: './', 
  define: {
    // CRITICAL: This prevents the "process is not defined" crash in the browser
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  }
});
