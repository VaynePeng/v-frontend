<template>
  <div class="w-screen h-screen overflow-hidden">
    <HeaderProvide>
      <Header />
      <section class="flex">
        <Sider />
        <section class="p-5">
          <router-view />
        </section>
      </section>
    </HeaderProvide>
  </div>
</template>

<script setup lang="ts">
import HeaderProvide from '@/components/HeaderProvide.vue'
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
</script>
