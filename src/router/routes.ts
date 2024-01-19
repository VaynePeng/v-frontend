import { RouteRecordRaw } from 'vue-router'
import RoutePath from './path'

const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.LOGIN,
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: RoutePath.HOME,
    component: () => import('@/pages/home/index.vue')
  }
]

export default routes
