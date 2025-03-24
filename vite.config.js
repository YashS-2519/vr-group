import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['f36c-2405-201-6004-e0e5-5e0f-94e0-1668-dac3.ngrok-free.app']
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
