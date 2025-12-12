import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  base: '/aliakbarabdollahi.github.io/',  // اگر subdirectory است
  // یا
  // base: '/',  // اگر root است
})
