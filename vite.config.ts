import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/rofex-final/',  // ← Important ! Remplace par le nom de ton dépôt GitHub
})