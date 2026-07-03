import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site raiz do usuário (brennops.github.io) → base '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
