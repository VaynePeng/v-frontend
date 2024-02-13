<template>
  <div ref="menuRef" class="px-2">
    <div v-for="element in menuList" :key="element.id">
      <div class="hover:bg-gray-100/90 rounded p-2 cursor-pointer select-none flex items-center text-sm" @click="openMenu(element.id)">
        <Icon v-if="element.icon" :name="element.icon" class="mr-2 flex-none" />
        <span class="flex-1 text-nowrap overflow-hidden text-ellipsis">
          {{ element.title }}
        </span>
        <Icon
          v-if="element.children?.length"
          name="icon-down"
          class="ml-2 flex-none"
          :class="{'rotate-180': isActive(element.id)}"
        />
      </div>
      <Menu
        v-if="element.children"
        :ref="(el) => menuChildrenRef[element.id] = el"
        :menu-list="element.children"
        class="h-0 overflow-hidden transition-all ease-linear duration-300"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, withDefaults } from 'vue'
import Icon from './Icon.vue'

interface Menu {
  id: number
  title: string
  path?: string
  icon?: string
  children?: Array<Menu>
}
interface Props {
  menuList: Array<Menu>
}
withDefaults(defineProps<Props>(), {
  menuList: () => []
})

const activeMenuList = ref<Array<number>>([])

const menuRef = ref<HTMLElement | null>(null)
const menuChildrenRef = ref<Record<number, any>>({})

defineExpose({
  node: menuRef
})

const openMenu = (id: number) => {
  const index = activeMenuList.value.indexOf(id)
  const node = menuChildrenRef.value[id]?.node
  if (index === -1) {
    if (node) {
      node.style.height = `${node.scrollHeight}px`
    }
    activeMenuList.value.push(id)
  }
  else {
    if (node) {
      node.style.height = '0px'
    }
    activeMenuList.value.splice(index, 1)
  }
}

const isActive = (id: number) => {
  return activeMenuList.value.includes(id)
}
</script>
