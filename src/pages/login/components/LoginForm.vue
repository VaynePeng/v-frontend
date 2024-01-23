<template>
  <input
    class="rounded-md focus:ring-2 focus:ring-black bg-background w-full p-2"
    placeholder="请输入手机号"
    :value="loginForm.phone"
    @input="inputPhoneHandle"
  />
  <div class="flex w-full mt-5">
    <input
      class="rounded-md focus:ring-2 focus:ring-black bg-background flex-1 p-2"
      placeholder="请输入验证码"
      :value="loginForm.code"
      @input="inputCodeHandle"
    />
    <button
      class="rounded-md bg-gray-700 text-white flex-none p-2 ml-2 hover:bg-slate-600"
    >
      获取验证码
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
import { defineEmits, ref } from 'vue'

const emits = defineEmits(['submit'])

export interface ILoginForm {
  phone: string
  code: string
}
const loginForm = ref<ILoginForm>({
  phone: '',
  code: ''
})

const inputPhoneHandle = (e: Event) => {
  const target = e.target as HTMLInputElement
  target.value = target.value.replace(/[^\d]/g, '')
  loginForm.value.phone = target.value
}

const inputCodeHandle = (e: Event) => {
  const target = e.target as HTMLInputElement
  target.value = target.value.replace(/[^0-9a-zA-Z]/g, '')
  loginForm.value.code = target.value
}

const submit = () => {
  emits('submit', loginForm.value)
}
</script>
