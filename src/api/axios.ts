import axios from 'axios'
import useLogin from '@/hooks/useLogin'
import { getEndpoint } from './endpoint'

const serverUrl = getEndpoint()

const instance = axios.create({
  baseURL: serverUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    console.log("🛫：", config)
    const { token } = useLogin()
    config.headers.Authorization = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    console.log("🛬：", response)
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
