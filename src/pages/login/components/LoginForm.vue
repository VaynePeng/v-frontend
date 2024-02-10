<template>
  <Input
    placeholder="请输入手机号"
    :value="loginForm.phoneNumber"
    @input="inputPhoneHandle"
  />
  <div class="flex w-full mt-5">
    <Input
      custom-class="flex-1"
      placeholder="请输入验证码"
      :value="loginForm.verifyNumber"
      @input="inputCodeHandle"
    />
    <Button
      class="flex-none w-auto"
      :disabled="disabledSendCode"
      @click="sendCode"
    >
      {{ sendCodeTimer ? `重新发送(${sendCodeTimer}s)` : '获取验证码' }}
    </Button>
  </div>
  <Button
    custom-class="mt-10"
    @click="submit"
  >
    登录
  </Button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

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

const inputPhoneHandle = (value: string) => {
  const formatStr = value.replace(/[^\d]/g, '')
  loginForm.value.phoneNumber = formatStr
}

const inputCodeHandle = (value: string) => {
  const formatStr = value.replace(/[^0-9a-zA-Z]/g, '')
  loginForm.value.verifyNumber = formatStr
}

const submit = () => {
  emits('submit', loginForm.value)
}
</script>
