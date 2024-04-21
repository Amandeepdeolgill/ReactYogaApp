import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir, 
    emptyOutDir: true, 
    cssCodeSplit: true, 
  },
  css: {
    outDir: 'css',
  },
  rollupOptions: {
    input: {
      main: resolve(root, 'index.html'),
      exercises: resolve(root, 'pages', 'Exercises.jsx'),
      homepage: resolve(root, 'pages', 'Homepage.jsx'),
      trainers: resolve(root, 'pages', 'Trainers.jsx'),
      navbar: resolve(root, 'components', 'Navbar.jsx'),
      footer: resolve(root, 'components', 'Footer.jsx'),
    },
  },
});

