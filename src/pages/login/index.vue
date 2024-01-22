<template>
  <button
    class="px-3 py-1 m-5 rounded bg-slate-500 text-white active:bg-slate-400"
    @click="login"
  >
    Login
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import useLogin from '@/hooks/useLogin'

const router = useRouter()
const { setToken } = useLogin()
const login = (): void => {
  setToken('this is token')
  router.push('/')
}
</script>
