import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

//const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        app: 'src/app.html',
        pyusd: 'src/pyusd.html',
        transaction: 'src/transaction.html',
      },
    },
  },
})
