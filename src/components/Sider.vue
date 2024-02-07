<template>
  <a-layout-sider
    class="!fixed top-[60px] bottom-0 !transition-all !ease-linear !delay-100"
    :class="{ '-translate-x-[200px]': !isHeaderVisible }"
  >
    <a-menu class="w-full">
      <a-sub-menu key="0">
        <template #icon>
          <IconHome />
        </template>
        <template #title>
          首页
        </template>
        <a-menu-item key="0_0">
          测试菜单
        </a-menu-item>
        <a-menu-item key="0_1">
          测试菜单
        </a-menu-item>
        <a-menu-item key="0_2">
          测试菜单
        </a-menu-item>
        <a-menu-item key="0_3">
          测试菜单
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
  <div
    class="w-[200px] transition-all ease-linear delay-100 max-md:hidden"
    :class="{ '!w-0': !isHeaderVisible }"
  />
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { IconHome } from '@arco-design/web-vue/es/icon'

const isHeaderVisible = inject('isHeaderVisible')
</script>
