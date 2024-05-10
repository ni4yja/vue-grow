import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  base: '/vue-grow/',
  plugins: [
    vue(),
    createSvgSpritePlugin({
      symbolId: '[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
