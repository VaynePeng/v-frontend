<template>
  <div class="fixed left-1/2 top-12">
    <div class="relative">
      <div
        v-for="(message, index) in messageList"
        :key="message.id"
        class="bg-white shadow rounded px-4 py-2 text-sm transform transition-all duration-500 ease-in-out absolute text-nowrap text-gray-500 left-1/2 translate-x-[-50%]"
        :style="{ top: index * 50 + 'px'}"
      >
        {{ message.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import messageStore from './messageStore'

const { messageList } = messageStore()
</script>
