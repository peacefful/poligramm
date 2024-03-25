<template>
  <transition name="fade">
    <aside v-if="isOpen" class="fixed top-0 left-0 bg-[#00000079] w-full h-screen z-10">
      <div class="fixed bg-white h-screen w-96 flex flex-col justify-between fade-aside">
        <div>
          <Card />
          <hr />
          <ul>
            <li 
              class="text-xl mt-2 ml-4" 
              v-for="navigation in navigations" 
              :key="navigation.id"
            >
              {{ t(`${navigation.title}`) }}
            </li>
          </ul>
        </div>
        <SwitcherLang class="ml-auto p-4" />
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { Card } from '@/entities/user'
import { SwitcherLang } from '@/features/switcher-lang'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  isOpen: boolean
}>()

const navigations = reactive([
  {
    id: 1,
    title: 'createChat'
  }
])
</script>

<style scoped>
@import url('./style.module.scss');
</style>
