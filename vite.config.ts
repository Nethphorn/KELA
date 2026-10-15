import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite config for the KELA square dashboard SPA.
// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- vite's defineConfig type is not resolved under the lint tsconfig program
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: '.',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist-web',
  },
})
