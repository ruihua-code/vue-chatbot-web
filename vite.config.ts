import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { splitVendorChunkPlugin } from 'vite';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const port = 8080;
const base = '/demo/';
console.log('当前环境:', process.env.NODE_ENV);

// https://vitejs.dev/config/
export default defineConfig({
  base,
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[ext]/[name].[hash].[ext]',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port,
    open: `http://localhost:${port}${base}`,
  },
});
