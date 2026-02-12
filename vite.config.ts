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
                configure: (proxy, _options) => {
                    console.log('Configuring proxy with target:', process.env.API_URL || 'http://localhost:3001');
                    proxy.on('error', (err, _req, _res) => {
                        console.log('proxy error', err);
                    });
                    proxy.on('proxyReq', (proxyReq, req, _res) => {
                        console.log('Sending Request to the Target:', req.method, req.url);
                    });
                    proxy.on('proxyRes', (proxyRes, req, _res) => {
                        console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
                    });
                },
                bypass: (req, _res, _proxyOptions) => {
                    console.log('Bypass check for:', req.url);
                    // Explicitly do NOT bypass the proxy for API requests, even if they accept HTML
                    if (req.url?.startsWith('/api')) {
                        console.log('Proxying API request (bypass=null):', req.url);
                        return null;
                    }
                }
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
