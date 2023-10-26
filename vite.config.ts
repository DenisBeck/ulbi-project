import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svgr({ include: '**/*.svg' }), react()],
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    define: {
        _IS_DEV_: JSON.stringify(true),
        _API_: JSON.stringify('http://localhost:8000'),
        _PROJECT_: JSON.stringify('frontend'),
    },
});
