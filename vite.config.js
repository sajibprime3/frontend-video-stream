import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
  ],
  server: {
    proxy: {
      '/playback': {
        target: "http://localhost:8081",
        changeOrigin: false
      },
      '/video': {
        target: "http://localhost:8080",
        changeOrigin: false
      },

    }
  }
})
