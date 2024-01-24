<template>
  <a-layout-sider
    class="!fixed top-[60px] bottom-0 left-0 !transition-all !ease-linear !delay-100"
    :class="{ '!left-[-200px]': !isHeaderVisible }"
  >
    <a-menu class="w-full">
      <a-sub-menu key="0">
        <template #icon>
          <IconHome />
        </template>
        <template #title>Navigation 1</template>
        <a-menu-item key="0_0">Menu 1</a-menu-item>
        <a-menu-item key="0_1">Menu 2</a-menu-item>
        <a-menu-item key="0_2">Menu 3</a-menu-item>
        <a-menu-item key="0_3">Menu 4</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
  <div
    class="w-[200px] transition-all ease-linear delay-100 max-md:hidden"
    :class="{ '!w-0': !isHeaderVisible }"
  ></div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { IconHome } from '@arco-design/web-vue/es/icon'

const isHeaderVisible = inject('isHeaderVisible')
</script>
