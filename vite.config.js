import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@App': path.resolve(__dirname, './src/app'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Features': path.resolve(__dirname, './src/features'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@Lib': path.resolve(__dirname, './src/lib'),
      '@Utils': path.resolve(__dirname, './src/utils'),
    },
  },
  server: {
    port: 8000,
  },
  base: '/studioyosepra-inbox-ui',
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
