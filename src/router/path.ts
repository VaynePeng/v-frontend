enum RoutePath {
  LOGIN = '/login',
  HOME = '/',
  DEBUG= '/debug',
  NOT_FOUND = '/:pathMatch(.*)*'
}

export default RoutePath
