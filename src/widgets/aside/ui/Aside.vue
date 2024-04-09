<template>
  <transition name="fade">
    <aside v-if="isOpen" class="fixed top-0 left-0 bg-[#00000079] w-full h-screen z-10">
      <div class="fixed bg-white h-screen w-96 flex flex-col justify-between fade-aside">
        <div>
          <Profile>
            <Logout />
          </Profile>
          <hr />
          <ul>
            <li class="px-3 text-lg" v-for="navigation in navigations" :key="navigation.id">
              <button
                class="mt-2 flex items-center w-full hover:bg-default p-2 rounded-md ease-in-out duration-100"
              >
                <Icon class="h-5 w-5 mr-4" :name="navigation.icon" />
                {{ t(`${navigation.title}`) }}
              </button>
            </li>
          </ul>
        </div>
        <SwitcherLang class="ml-auto p-4" />
      </div>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { Profile } from '@/entities/user'
import { Logout } from '@/features/auth'
import { SwitcherLang } from '@/features/switcher-lang'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@/shared/ui/icon'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  isOpen: boolean
}>()

const navigations = reactive([
  {
    id: 1,
    title: 'createChat',
    icon: 'chat'
  },
  {
    id: 2,
    title: 'chats',
    icon: 'chats'
  }
])
</script>

<style scoped>
@import url('./style.module.scss');
</style>
