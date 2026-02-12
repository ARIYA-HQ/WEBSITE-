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
    base: process.env.BASE_PATH || (process.env.VERCEL ? '/' : '/WEBSITE-/'),
    server: {
        host: true, // Listen on all addresses
        proxy: {
            '/api': {
                target: process.env.API_URL || 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            }
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
