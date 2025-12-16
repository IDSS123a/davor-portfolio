import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' must be '/' because you are using a custom domain at the root (ai-studio.wiki)
  base: '/', 
  define: {
    // Prevents "process is not defined" error in browser
    'process.env': {}
  },
  build: {
    // Bundle everything to ensure stability. No external dependencies.
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
});
