import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // run on localhost:3000 (like CRA / the tutorial)
    open: true, // auto-open the browser when the dev server starts
  },
})
