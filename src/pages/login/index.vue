<template>
  <div class="flex w-full justify-center py-24 mt-[10%]">
    <div class="flex w-full max-w-sm flex-col items-center px-4 sm:px-0">
      <div class="mb-10 text-3xl font-semibold leading-7 text-gray-900">
        运营管理后台
      </div>
      <KeepAlive>
        <LoginForm v-if="loginType === 'PASSWORD'" @submit="login" />
        <QrLoginForm v-else />
      </KeepAlive>
      <div
        class="mt-5 text-sm cursor-pointer text-gray-500 select-none hover:text-gray-400"
        @click="toggleLoginType"
      >
        {{ loginType === 'PASSWORD' ? '扫码' : '密码' }}登录
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Message from '@arco-design/web-vue/es/message'
import useLogin from '@/hooks/useLogin'

import LoginForm from './components/LoginForm.vue'
import type { ILoginForm } from './components/LoginForm.vue'
import QrLoginForm from './components/QrLoginForm.vue'

const router = useRouter()
const { setToken } = useLogin()

type LoginType = 'QR' | 'PASSWORD'
const loginType = ref<LoginType>('PASSWORD')

const toggleLoginType = (): void => {
  loginType.value = loginType.value === 'PASSWORD' ? 'QR' : 'PASSWORD'
}

const login = (params: ILoginForm): void => {
  console.log('🚀', params)
  if (!params.phoneNumber) {
    Message.error('请输入手机号')
    return
  }
  if (!params.verifyNumber) {
    Message.error('请输入验证码')
    return
  }
  setToken('jwt_token')
  Message.success('登录成功')
  router.push('/')
}
</script>
