import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' must be '/' because you are using a custom domain at the root (ai-studio.wiki)
  base: '/', 
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client', '@google/genai'],
      output: {
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@google/genai': 'GoogleGenAI'
        }
      }
    }
  }
});
