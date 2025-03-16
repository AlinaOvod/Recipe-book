import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/recipe-book/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
