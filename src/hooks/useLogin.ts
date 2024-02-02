import { useStorage } from '@vueuse/core'

const useLogin = () => {
  const token = useStorage<string | null>('token', null)
  // qm:ticket

  const isLogin = Boolean(token.value)
  const setToken = (value: string) => (token.value = value)
  const removeToken = () => (token.value = null)
  return {
    isLogin,
    setToken,
    removeToken,
    token: token.value
  }
}

export default useLogin
