import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        projets: 'projets.html',
        expertise: 'expertise.html',
        contact: 'contact.html',
        cv: 'cv.html'
      },
    },
  },
})
