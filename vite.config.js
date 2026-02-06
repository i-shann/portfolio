import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    // We use './' during build so that assets are loaded relative to index.html
    // This prevents the "portfolio/portfolio/assets" double-path issue on GitHub Pages.
    base: command === 'serve' ? '/' : './',

    plugins: [
      react(),
      tailwindcss()
    ],

    resolve: {
      alias: {
        // This allows you to use @/components/ instead of ../../../components/
        "@": path.resolve(__dirname, './src'),
      },
    },

    // Optional: ensures the build output goes to 'dist' (default)
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
})