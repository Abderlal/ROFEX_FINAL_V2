import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/rofex-final-v2/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
