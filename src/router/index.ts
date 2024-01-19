import { createRouter, createWebHistory } from 'vue-router'
import RoutePath from './path'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== RoutePath.LOGIN) {
    if (!localStorage.getItem('token')) {
      next(RoutePath.LOGIN)
    } else {
      next()
    }
    return
  }
  next()
})

export default router
