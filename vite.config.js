import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Using a relative base ('./') means the built site works whether it's served
// from the domain root (username.github.io) OR a subpath (username.github.io/repo).
// Because this is a single-page site (no client-side router), relative paths are safe.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
