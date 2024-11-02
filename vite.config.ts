
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        app: 'src/App/index.html',
        pyusd: 'src/Pyusd/index.html',
        transaction: 'src/Transaction/index.html',
      },
    },
  },
})
