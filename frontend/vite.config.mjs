import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: { outDir: 'build', target: 'es2020' },
  server: {
    strictPort: true,
    proxy: {
      '/api': 'http://127.0.0.1:5000',
      '/.netlify/functions': { target: 'https://biogy.netlify.app', changeOrigin: true },
    },
  },
  test: { environment: 'node', include: ['src/**/*.test.js'] },
});
