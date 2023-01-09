import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const path = require('path')

export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  // resolve: {
  //   alias: {
      // '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
  //   }
  // },
  server: {
    host: '0.0.0.0',
    port: 3050,
    hot: true
  },
  plugins: [react()]
})
