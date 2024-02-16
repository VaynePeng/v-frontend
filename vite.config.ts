import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
          isCustomElement: tag => /^micro-app/.test(tag)
        }
      }
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  server: {
    /* proxy: {
      '/proxy-dev': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/proxy-dev/, '')
      },
      '/proxy-beta': {
        target: 'http://pc.newmi.net:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/proxy-beta/, '')
      },
      '/proxy-prod': {
        target: 'https://qm.xinmiyun.cn',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/proxy-prod/, '')
      }
    }, */
    port: 3000,
    open: true
  }
})
