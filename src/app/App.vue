<template>
  <DefaultLayout class="flex" v-if="checkPath()">
    <template #burgerMenu>
      <BurgerMenu :is-open="burgerMenu.isOpen" />
    </template>
    <template #aside>
      <Aside/>
    </template>
  </DefaultLayout>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { DefaultLayout } from '@/shared/ui/layouts'
import { BurgerMenu } from '@/widgets/burgerMenu'
import { Aside } from '@/widgets/aside'
import { useToggleMenu } from '@/shared/lib/hooks'
import { type TMenu } from '@/shared/types'
import { useRoute } from 'vue-router'
import { reactive, provide } from 'vue'

const burgerMenu: TMenu = reactive({
  isOpen: false,
  className: 'z-10'
})

const { toggle: openBurgerMenu } = useToggleMenu(burgerMenu)

provide('toggleBurgerMenu', { openBurgerMenu })

const checkPath = () => {
  const currentRoute: string = useRoute().fullPath
  return currentRoute !== '/' && currentRoute !== '/signup'
}
</script>
