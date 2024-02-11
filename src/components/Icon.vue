<template>
  <i
    class="iconfont cursor-pointer"
    :class="name"
    :style="{'font-size': `${size}px`}"
  ></i>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

interface Props {
  name: string
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 16
})
</script>
