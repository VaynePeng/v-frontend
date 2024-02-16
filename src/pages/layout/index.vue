<template>
  <div class="w-screen h-screen overflow-hidden flex flex-col">
    <HeaderProvide>
      <Header />
      <section class="flex flex-1">
        <Sider />
        <section class="flex-1">
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
