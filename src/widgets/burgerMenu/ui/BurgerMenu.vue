<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed top-0 left-0 bg-[#00000079] w-full h-screen z-10">
      <div class="fixed bg-white h-screen w-[400px] flex flex-col justify-between fade-burger dark:bg-[#111111]">
        <div>
          <ProfileHeader>
            <Logout />
          </ProfileHeader>
          <ul>
            <li class="text-lg" v-for="navigation in navigations" :key="navigation.id">
              <NavigateButton
                @action="navigation.action"
                :title="navigation.title"
                :icon="navigation.icon"
              />
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-between p-5">
          <SwitchTheme/>
          <SwitcherLang/>
        </div>
      </div>
      <Modal class="w-[600px] " @close-modal="closeModal" :is-open-modal="isOpenModal">
        <ChatForm @close-modal="closeModal" />
      </Modal>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Logout } from '@/features/auth'
import { ChatForm } from '@/features/chat'
import { SwitcherLang } from '@/features/switcherLang'
import { SwitchTheme } from '@/features/switchTheme'
import { NavigateButton } from '@/entities/common'
import { ProfileHeader } from '@/entities/user'
import { useToggleModal } from '@/shared/lib/hooks'
import { type TNavigate } from '@/shared/types'
import { Modal } from '@/shared/ui/modal'

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
