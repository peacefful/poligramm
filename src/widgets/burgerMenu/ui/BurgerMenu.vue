<template>
  <transition name="fade">
    <div v-if="isOpen" class="absolute top-0 left-0 bg-[#00000079] w-full h-screen z-10">
      <div class="fixed bg-white h-screen w-96 flex flex-col justify-between fade-burger">
        <div>
          <Profile>
            <Logout />
          </Profile>
          <ul>
            <li class="px-3 text-lg" v-for="navigation in navigations" :key="navigation.id">
              <NavigateButton
                @action="navigation.action"
                :title="navigation.title"
                :icon="navigation.icon"
              />
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
import { Modal } from '@/shared/ui/modal'
import { useToggleModal } from '@/shared/lib/hooks'
import { ChatForm } from '@/features/chat'
import { NavigateButton } from '@/entities/common'
import { type TNavigate } from '@/shared/types'

defineProps<{
  isOpen: boolean
}>()

const { isOpenModal, closeModal, openModal } = useToggleModal()

const navigations: TNavigate[] = reactive([
  {
    id: 1,
    title: 'createChat',
    icon: 'chat',
    action: openModal
  }
])
</script>

<style scoped>
@import url('./style.module.scss');
</style>
