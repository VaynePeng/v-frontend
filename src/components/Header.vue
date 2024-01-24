<template>
  <a-layout-header
    class="h-[60px] flex items-center px-5 shadow-sm bg-slate-50"
  >
    <a-button size="large" @click="toggleHeaderVisibility">
      <template #icon>
        <IconMenu />
      </template>
    </a-button>
  </a-layout-header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { IconMenu } from '@arco-design/web-vue/es/icon'

const toggleHeaderVisibility = inject('toggleHeaderVisibility')
</script>
