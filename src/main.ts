import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app';
    import router from './router';

import App from './App.vue'

import '@arco-design/web-vue/es/message/style/css.js'
import './style.css'

microApp.start({
    'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true, // 关闭对子应用请求的拦截
})

const app = createApp(App)
app.use(router)
app.mount('#app')
