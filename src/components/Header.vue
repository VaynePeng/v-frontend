<template>
  <a-layout-header
    class="h-[60px] flex items-center justify-between px-5 shadow-sm bg-slate-50"
  >
    <a-button size="large" @click="toggleHeaderVisibility">
      <template #icon>
        <IconMenu />
      </template>
    </a-button>
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
  </a-layout-header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { IconMenu, IconPoweroff } from '@arco-design/web-vue/es/icon'
import useLogin from '@/hooks/useLogin'
import RoutePath from '@/router/path'

const { removeToken } = useLogin()
const router = useRouter()

const isTabletOrAbove = inject('isTabletOrAbove')
const toggleHeaderVisibility = inject('toggleHeaderVisibility')

const loginOut = (): void => {
  removeToken()
  router.push(RoutePath.LOGIN)
}
</script>
