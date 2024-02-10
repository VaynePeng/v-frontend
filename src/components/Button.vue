<template>
  <button
    class="rounded-md bg-gray-700 text-white flex-none p-2 ml-2 hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed w-full"
    :class="customClass"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface Props {
  disabled: boolean
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  disabled: false
})
</script>
