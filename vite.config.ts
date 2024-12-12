import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png'], // Tambahkan pola untuk file PNG
  server: {
    host: '0.0.0.0',
  },
  base: 'sipd-hub'
})
