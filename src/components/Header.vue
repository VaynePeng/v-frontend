<template>
  <header
    class="h-[60px] flex items-center justify-between px-5 shadow-sm bg-slate-50"
  >
    <Button button-type="text" @click="toggleHeaderVisibility">
      <Icon icon="icon-menu" />
    </Button>
    <a-tooltip content="退出登录" position="bottom">
      <template v-if="isTabletOrAbove">
        <a-button size="large" type="text" @click="loginOut">
          VaynePeng
          <template #icon>
            <IconPoweroff />
          </template>
        </a-button>
      </template>
      <template v-else>
        <a-button size="large" type="text" @click="loginOut">
          <template #icon>
            <IconPoweroff />
          </template>
        </a-button>
      </template>
    </a-tooltip>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { IconPoweroff } from '@arco-design/web-vue/es/icon'
import useLogin from '@/hooks/useLogin'
import RoutePath from '@/router/path'

import type { IsTabletOrAbove, ToggleHeaderVisibility } from './HeaderProvide.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'

const { removeToken } = useLogin()
const router = useRouter()

const isTabletOrAbove = inject<IsTabletOrAbove>('isTabletOrAbove')
const toggleHeaderVisibility = inject<ToggleHeaderVisibility>('toggleHeaderVisibility')

const loginOut = (): void => {
  removeToken()
  router.push(RoutePath.LOGIN)
}
</script>
