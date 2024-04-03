<template>
  <img
    @click="$emit('toogle-menu')"
    class="p-1 rounded-full active:bg-[#3090df] ease-in duration-100 cursor-pointer"
    src="@/assets/icons/menu.svg"
  />
  <transition>
    <div v-if="isOpenMenu" class="dropdown-menu">
      <ul v-for="(m, i) in menu" :key="i">
        <li @click="m.onClick" class="dropdown-menu__list">
          {{ t(`${m.title}`) }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { IMenu } from '@/interfaces/iMenu'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  isOpenMenu: boolean
  menu: IMenu[]
}>()

defineEmits(['toogle-menu'])
</script>

<style scoped lang="scss">
.dropdown-menu {
  @apply text-lg absolute top-10 right-10 bg-blue-400 text-white p-2 rounded-sm z-10;
  .dropdown-menu__list {
    @apply cursor-pointer hover:bg-blue-300 p-2 rounded-md;
  }
}
</style>
@/shared/types/iMenu