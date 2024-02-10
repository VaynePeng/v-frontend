<template>
  <i
    class="iconfont cursor-pointer"
    :class="icon"
    :style="{'font-size': `${size}px`}"
  ></i>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  icon: string
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 16
})
</script>
