import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Định nghĩa cấu hình Vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Chạy frontend trên cổng 5173
    proxy: {
      // Proxy API gọi đến backend
      '/api': {
        target: 'https://demcalo.onrender.com', // Backend đang chạy ở cổng 3000
        changeOrigin: true,
      },
    },
  },
});
