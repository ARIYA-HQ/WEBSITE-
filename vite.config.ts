import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.VERCEL ? '/' : '/WEBSITE-/',
    server: {
        proxy: {
            '/api': 'http://localhost:3001'
        }
    }
})
