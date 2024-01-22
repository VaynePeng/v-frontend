import { createRouter, createWebHistory } from 'vue-router'
import useLogin from '@/hooks/useLogin'
import RoutePath from './path'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = useLogin()
  if (!isLogin) {
    if (to.path === RoutePath.LOGIN) {
      next()
      return
    }
    next(RoutePath.LOGIN)
    return
  } else if (to.path === RoutePath.LOGIN) {
    const nextPath = from.path || RoutePath.HOME
    next(nextPath)
    return
  }
  next()
})

export default router
