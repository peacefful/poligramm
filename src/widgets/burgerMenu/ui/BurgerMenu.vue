<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed top-0 left-0 bg-[#00000079] w-full h-screen z-10">
      <div class="fixed bg-white h-screen w-96 flex flex-col justify-between fade-burger">
        <div>
          <Profile>
            <Logout />
          </Profile>
          <hr />
          <ul>
            <li class="px-3 text-lg" v-for="navigation in navigations" :key="navigation.id">
              <button
                class="mt-2 text-xl flex items-center w-full p-3 rounded-md hover:bg-[#f0f0f0] ease-out duration-200"
                @click="navigation.action"
              >
                <Icon class="h-7 w-7 mr-4" :name="navigation.icon" />
                {{ t(`${navigation.title}`) }}
              </button>
            </li>
          </ul>
        </div>
        <SwitcherLang class="ml-auto p-4" />
      </div>
      <Modal @close-modal="closeModal" :is-open-modal="isOpenModal">
        <ChatForm @close-modal="closeModal" />
      </Modal>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Profile } from '@/entities/user'
import { Logout } from '@/features/auth'
import { SwitcherLang } from '@/features/switcher-lang'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@/shared/ui/icon'
import { Modal } from '@/shared/ui/modal'
import { useToggleModal } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui/button'
import { ChatForm } from '@/features/chat'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  isOpen: boolean
}>()

const { isOpenModal, closeModal, openModal } = useToggleModal()

const navigations = reactive([
  {
    id: 1,
    title: 'createChat',
    icon: 'chat',
    action: openModal
  },
  {
    id: 2,
    title: 'chats',
    icon: 'chats',
    action: null
  }
])
</script>

<style scoped>
@import url('./style.module.scss');
</style>
