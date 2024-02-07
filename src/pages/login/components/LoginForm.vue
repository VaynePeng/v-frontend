<template>
  <input
    class="rounded-md focus:ring-2 focus:ring-black bg-background w-full p-2"
    placeholder="请输入手机号"
    :value="loginForm.phoneNumber"
    @input="inputPhoneHandle"
  />
  <div class="flex w-full mt-5">
    <input
      class="rounded-md focus:ring-2 focus:ring-black bg-background flex-1 p-2"
      placeholder="请输入验证码"
      :value="loginForm.verifyNumber"
      @input="inputCodeHandle"
    />
    <button
      class="rounded-md bg-gray-700 text-white flex-none p-2 ml-2 hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
      :disabled="disabledSendCode"
      @click="sendCode"
    >
      {{ sendCodeTimer ? `重新发送(${sendCodeTimer}s)` : '获取验证码' }}
    </button>
  </div>
  <button
    class="w-full bg-gray-700 rounded-md text-white p-2 mt-10 hover:bg-slate-600"
    @click="submit"
  >
    登录
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

const emits = defineEmits(['submit'])

export interface ILoginForm {
  phoneNumber: string
  verifyNumber: string
}
const loginForm = ref<ILoginForm>({
  phoneNumber: '',
  verifyNumber: ''
})

const sendCodeTimer = useStorage('sendCodeTimer', 0)

const disabledSendCode = computed(
  () => sendCodeTimer.value > 0 || !loginForm.value.phoneNumber
)

const countBack = () => {
  const timer = setInterval(() => {
    sendCodeTimer.value -= 1
    if (!sendCodeTimer.value) {
      clearInterval(timer)
    }
  }, 1000)
}

const sendCode = () => {
  sendCodeTimer.value = 10
  countBack()
}

onMounted(() => {
  if (sendCodeTimer.value > 0) {
    countBack()
  }
})

const inputPhoneHandle = (e: Event) => {
  const target = e.target as HTMLInputElement
  target.value = target.value.replace(/[^\d]/g, '')
  loginForm.value.phoneNumber = target.value
}

const inputCodeHandle = (e: Event) => {
  const target = e.target as HTMLInputElement
  target.value = target.value.replace(/[^0-9a-zA-Z]/g, '')
  loginForm.value.verifyNumber = target.value
}

const submit = () => {
  emits('submit', loginForm.value)
}
</script>
