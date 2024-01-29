import { RouteRecordRaw } from 'vue-router'
import RoutePath from './path'

const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.LOGIN,
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: RoutePath.HOME,
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: RoutePath.HOME,
        component: () => import('@/pages/home/index.vue')
      }
    ]
  },
  {
    path: RoutePath.DEBUG,
    meta: {
      isDev: true
    },
    component: () => import('@/pages/Debug.vue')
  },
  {
    path: RoutePath.NOT_FOUND,
    component: () => import('@/pages/NotFound.vue')
  }
]

export default routes
