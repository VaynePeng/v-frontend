import { useStorage } from '@vueuse/core'

export enum Endpoint {
  PROXY_DEV = '/proxy-dev',
  PROXY_BATE = '/proxy-beta',
  PROXY_PRODUCTION = '/proxy-prod',
  PRODUCTION = 'http://cardbff.newmi.net:11180'
}

const endpoint = useStorage<Endpoint>('endpoint', null)

export const getEndpoint = (): Endpoint => {
  if (import.meta.env.DEV) {
    return endpoint.value || Endpoint.PROXY_DEV
  }
  return Endpoint.PRODUCTION
}

export const setEndpoint = (value: Endpoint) => {
  endpoint.value = value
}
