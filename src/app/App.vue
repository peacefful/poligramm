<template>
  <DefaultLayout v-if="checkPath()">
    <template #burgerMenu>
      <BurgerMenu :is-open="burgerMenu.isOpenMenu" />
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

const burgerMenu: TMenu = reactive({
  isOpenMenu: false,
  className: 'z-10'
})

const { toggle: openBurgerMenu } = useToggleMenu(burgerMenu)

provide('toggleBurgerMenu', { openBurgerMenu })

const checkPath = () => {
  const currentRoute: string = useRoute().fullPath
  return currentRoute !== '/' && currentRoute !== '/signup'
}
</script>
