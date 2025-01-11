<template>
  <main>
    <BurgerMenu :is-open="burgerMenu.isOpenMenu" />
    <Aside />
    <div class="ml-[382px]">
      <NuxtPage />
    </div>
    <slot name="notification"></slot>
  </main>
</template>

<script setup lang="ts">
import { Aside } from '@/widgets/aside'
import { BurgerMenu } from '@/widgets/burgerMenu'
import { useToggleMenu } from '@/shared/lib/hooks'
import { type TMenu } from '@/shared/types'
import { useSwitchTheme } from '~/entities/common'

const { useCheckThemeMode } = useSwitchTheme()

useCheckThemeMode()

const burgerMenu: TMenu = reactive({
  isOpenMenu: false,
  className: 'z-10',
  name: 'burgerMenu'
})

const { toggle: openBurgerMenu } = useToggleMenu(burgerMenu)

provide('toggleBurgerMenu', { openBurgerMenu })
</script>

<style scoped>
@import url('style.module.scss');
</style>
