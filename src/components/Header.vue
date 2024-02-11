<template>
  <header
    class="h-[60px] flex items-center justify-between px-5 shadow-sm bg-slate-50"
  >
    <Button button-type="text" @click="toggleHeaderVisibility">
      <Icon name="icon-menu" />
    </Button>
    <Button button-type="text" @click="loginOut">
      退出登录
    </Button>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '@/hooks/useLogin'
import RoutePath from '@/router/path'

import type { ToggleHeaderVisibility } from './HeaderProvide.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'

const { removeToken } = useLogin()
const router = useRouter()

const toggleHeaderVisibility = inject<ToggleHeaderVisibility>('toggleHeaderVisibility')

const loginOut = (): void => {
  removeToken()
  router.push(RoutePath.LOGIN)
}
</script>
