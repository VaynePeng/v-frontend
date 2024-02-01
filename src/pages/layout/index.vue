<template>
  <a-layout class="w-screen h-screen overflow-hidden">
    <HeaderProvide>
      <Header />
      <a-layout>
        <Sider />
        <a-layout-content class="p-5">
          <router-view />
        </a-layout-content>
      </a-layout>
    </HeaderProvide>
  </a-layout>
</template>

<script setup lang="ts">
import HeaderProvide from '@/components/HeaderProvide.vue'
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
</script>
