import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-dom': 'react-dom/client',
      'react-dom/*': 'react-dom/client/*'
    }
  }
})
