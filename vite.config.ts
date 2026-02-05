import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    optimizeDeps: {
        include: ['react-is'],
    },
    base: process.env.VERCEL ? '/' : '/WEBSITE-/',
    server: {
        proxy: {
            '/api': 'http://localhost:3001'
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
                }
            }
        }
    }
})
