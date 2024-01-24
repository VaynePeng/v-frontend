<template>
  <a-layout class="w-screen h-screen overflow-hidden">
    <HeaderContext>
      <Header />
      <a-layout>
        <Sider />
        <a-layout-content class="p-5">Content</a-layout-content>
      </a-layout>
    </HeaderContext>
  </a-layout>
</template>

<script setup lang="ts">
import HeaderContext from '@/components/HeaderContext.vue'
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
</script>
