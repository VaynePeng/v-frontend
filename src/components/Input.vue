<template>
  <input
    class="rounded-md focus:ring-2 focus:ring-black bg-background flex-1 p-2 w-full text-sm"
    :value="value"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  value: string | number
  placeholder: string
}
withDefaults(defineProps<Props>(), {
  value: '',
  placeholder: ''
})

const emits = defineEmits<{
  input: [value: string ]
}>()

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('input', target.value)
}
</script>
