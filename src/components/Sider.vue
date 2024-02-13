<template>
  <aside
    class="w-[200px] fixed top-[60px] bottom-0 transition-all ease-linear shadow bg-white py-2"
    :class="{ '-translate-x-[200px]': !isHeaderVisible }"
  >
    <Menu :menu-list="menuList" />
  </aside>
  <div
    class="w-[200px] transition-all ease-linear max-md:hidden"
    :class="{ '!w-0': !isHeaderVisible }"
  />
</template>

<script setup lang="ts">
import { inject } from 'vue'

import Menu from './Menu.vue'

const isHeaderVisible = inject('isHeaderVisible')

const menuList = [
  {
    id: 1,
    title: '首页',
    icon: 'icon-home',
    path: '/',
    children: [
      {
        id: 11,
        title: '首页',
        path: '/'
      },
      {
        id: 12,
        title: '文章',
        path: '/article'
      },
      {
        id: 13,
        title: '标签',
        path: '/tag'
      },
      {
        id: 14,
        title: '分类',
        path: '/category'
      }
    ]
  },
  {
    id: 2,
    title: '文章',
    icon: 'icon-menu',
    path: '/article'
  },
  {
    id: 3,
    title: '标签',
    icon: 'icon-home',
    path: '/tag'
  },
  {
    id: 4,
    title: '分类',
    icon: 'icon-menu',
    path: '/category'
  }
]
</script>
