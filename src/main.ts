import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'
import router from './router'
import './style.css'
import App from './App.vue'

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true // 关闭对子应用请求的拦截  
})

const app = createApp(App)
app.use(router)
app.mount('#app')
