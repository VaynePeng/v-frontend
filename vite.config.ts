import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {  
    preprocessorOptions: {
      less: {
        modifyVars: { 'primary-6': '#334155' }
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => /^micro-app/.test(tag)
        }
      }
    }),
    AutoImport({
      resolvers: [ArcoResolver()]
    }),
    Components({
      resolvers: [
        ArcoResolver({
          importStyle: 'less'
        })
      ]
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  server: {
    port: 8080,
    open: true
  }
})
