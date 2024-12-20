// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/Evangadi-forum-frontend/', // Replace <REPO_NAME> with your GitHub repository name
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { writeFileSync, copyFileSync } from 'fs';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/Evangadi-forum-frontend/', // Your GitHub repository name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // Post-build script to copy index.html as 404.html
  buildEnd() {
    const distDir = resolve(__dirname, 'dist');
    const indexFile = resolve(distDir, 'index.html');
    const notFoundFile = resolve(distDir, '404.html');
    copyFileSync(indexFile, notFoundFile);
    console.log('Copied index.html to 404.html for SPA routing on GitHub Pages.');
  },
});
