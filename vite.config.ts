import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:"/aliakbarabdollahi.github.io/",
  server:{
    open: true,
    port:3001
  }
})
