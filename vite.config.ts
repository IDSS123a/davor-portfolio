
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // We treat these libraries as external because they are loaded via 
    // <script type="importmap"> in index.html from esm.sh CDN.
    // This keeps the build fast and prevents "module not found" errors on Vercel.
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
