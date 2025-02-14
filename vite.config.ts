import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const imports = AutoImport({
  imports: ['vue', 'pinia', 'vue-router'],
  dts: true,
})

const components = Components({
  dirs: ['.global/src/components'],
})

export default defineConfig({
  plugins: [vue(), vueDevTools(), imports, components],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Events:container': fileURLToPath(new URL('./src/Events/container', import.meta.url)),
      '@Events:routes': fileURLToPath(new URL('./src/Events/routes', import.meta.url)),
    },
  },
})
