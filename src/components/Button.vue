<template>
  <button
    class="rounded-md flex-none p-2 ml-2 disabled:cursor-not-allowed text-sm"
    :class="buttonTypeClass[buttonType]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

type ButtonType = 'text' | 'primary' | 'danger'
interface Props {
  buttonType?: ButtonType
  disabled?: boolean
}

const buttonTypeClass = {
  text: 'text-gray-500 hover:text-gray-400 disabled:text-gray-300',
  primary: 'text-white bg-gray-700 hover:bg-slate-600 disabled:bg-gray-500',
  danger: 'text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400'
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  buttonType: 'primary'
})
</script>
