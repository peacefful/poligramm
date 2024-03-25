<template>
  <DefaultLayout v-if="checkPath()">
    <template #aside>
      <Aside :is-open="aside.isOpen" />
    </template>
    <template #header>
      <Header @toogle-menu="toggleAside" />
    </template>
  </DefaultLayout>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { DefaultLayout } from '@/shared/ui/layouts'
import { Aside } from '@/widgets/aside'
import { Header } from '@/widgets/header'
import { useToogleMenu } from '@/shared/lib/hooks'
import { type IMenu } from '@/shared/types'

import { useRoute } from 'vue-router'
import { reactive } from 'vue'

const aside: IMenu = reactive({
  isOpen: false,
  className: 'z-10'
})

const { toggle: toggleAside } = useToogleMenu(aside)

const checkPath = () => {
  const currentRoute: string = useRoute().fullPath
  return currentRoute !== '/' && currentRoute !== '/registration'
}
</script>
