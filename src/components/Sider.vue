<template>
  <aside
    class="w-[200px] fixed top-[60px] bottom-0 transition-all ease-linear delay-300 shadow bg-white"
    :class="{ '-translate-x-[200px]': !isHeaderVisible }"
  >
    <Menu />
  </aside>
  <div
    class="w-[200px] transition-all ease-linear delay-300 max-md:hidden"
    :class="{ 'w-0': !isHeaderVisible }"
  />
</template>

<script setup lang="ts">
import { inject } from 'vue'

import Menu from './Menu.vue'

const isHeaderVisible = inject('isHeaderVisible')
</script>
