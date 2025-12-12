import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




export default defineConfig({
  plugins: [react()],
  base: '/',  // یا اگر subdirectory است: '/repo-name/'
})
