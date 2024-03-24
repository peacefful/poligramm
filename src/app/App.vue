<template>
  <DefaultLayout v-if="checkPath()">
    <template #aside>
      <Aside :is-open="aside.isOpen" />
    </template>
    <template #header>
      <Header @toogle-menu="toogleAside" />
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
import { useRoute } from 'vue-router'
import { useToogleMenu } from '@/shared/lib/hooks'
import { reactive } from 'vue'
import { type IMenu } from '@/shared/types'

const aside: IMenu = reactive({
  isOpen: false,
  target: null
})

const { toogle: toogleAside } = useToogleMenu(aside)

const checkPath = () => {
  const currentRoute: string = useRoute().fullPath
  return currentRoute !== '/' && currentRoute !== '/registration'
}
</script>
