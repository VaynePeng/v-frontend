<template>
  <div class="p-2">
    <div class="hover:bg-gray-100/90 rounded p-2 cursor-pointer select-none flex items-center text-sm">
      <Icon name="icon-home" class="mr-2 flex-none" />
      <span class="flex-1 text-nowrap overflow-hidden text-ellipsis">
        首页
      </span>
      <Icon name="icon-down" class="ml-2 flex-none" :class="{'rotate-180': false}" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from './Icon.vue'
</script>
