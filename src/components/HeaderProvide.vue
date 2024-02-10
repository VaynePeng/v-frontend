<template>
  <slot />
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const isHeaderVisibleOverride = ref<boolean | undefined>()

const isTabletOrAbove = computed(() => width.value >= 768)

const isHeaderVisible = computed(
  () => isHeaderVisibleOverride.value ?? isTabletOrAbove.value
)

const toggleHeaderVisibility = () => {
  isHeaderVisibleOverride.value = !isHeaderVisible.value
}

provide('toggleHeaderVisibility', toggleHeaderVisibility)
provide('isHeaderVisible', isHeaderVisible)
provide('isTabletOrAbove', isTabletOrAbove)

export type IsTabletOrAbove = typeof isTabletOrAbove
export type IsHeaderVisible = typeof isHeaderVisible
export type ToggleHeaderVisibility = typeof toggleHeaderVisibility
</script>
