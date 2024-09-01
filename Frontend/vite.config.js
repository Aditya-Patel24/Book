import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 10000, // Ensure this port matches Render’s expected port
    host: true   // Binds to all network interfaces
  },
  plugins: [react()],
})
