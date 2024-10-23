<template>
  <DefaultLayout v-if="checkPath()">
    <template #burgerMenu>
      <BurgerMenu :is-open="menuStore.burgerMenu.isOpenMenu" />
    </template>
    <template #aside>
      <Aside />
    </template>
  </DefaultLayout>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { reactive, provide } from 'vue'
import { useRoute } from 'vue-router'
import { Aside } from '@/widgets/aside'
import { BurgerMenu } from '@/widgets/burgerMenu'
import { useToggleMenu } from '@/shared/lib/hooks'
import { type TMenu } from '@/shared/types'
import { DefaultLayout } from '@/shared/ui/layouts/default'
import { useMenuStore } from '@/entities/common'

const menuStore = useMenuStore()

// const burgerMenu: TMenu = reactive({
//   isOpenMenu: false,
//   className: 'z-10'
// })

const { toggle: openBurgerMenu } = useToggleMenu(menuStore.burgerMenu)

provide('toggleBurgerMenu', { openBurgerMenu })

const checkPath = () => {
  const currentRoute: string = useRoute().fullPath
  return currentRoute !== '/' && currentRoute !== '/signup'
}
</script>

