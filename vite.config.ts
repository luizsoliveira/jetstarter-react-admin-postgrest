import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
        // hmr: {
        //     port: 7000,
        // },
    },
    //base: './cnl/',
    base: '/cnl/',
    build: {
        chunkSizeWarningLimit: 1600,
    },
});
