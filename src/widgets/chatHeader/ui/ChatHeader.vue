<template>
  <header @click="openModal" class="cursor-pointer">
    <div
      class="fixed top-0 left-[383px] right-0 bg-white h-[70px] px-4 flex justify-between items-center"
    >
      <div class="flex items-center">
        <div class="bg-default p-2 rounded-full mr-2">
          <Icon class="h-8 w-8" name="usersGroup" />
        </div>
        <h1 class="font-bold text-xl">{{ chatName }}</h1>
      </div>
    </div>
  </header>
  <Modal class="w-[900px] h-[800px]" @close-modal="closeModal" :is-open-modal="isOpenModal">
    <PreviewCard @close-modal="closeModal" :chat="chatsStore.chat" />
  </Modal>
</template>

<script setup lang="ts">
import { useToggleModal } from '@/shared/lib/hooks'
import { Icon } from '@/shared/ui/icon'
import { Modal } from '@/shared/ui/modal'
import { useChatsStore } from '@/entities/chat'
import { PreviewCard } from '@/entities/chat'

defineProps<{ chatName?: string }>()

const chatsStore = useChatsStore()


const { isOpenModal, closeModal, openModal } = useToggleModal()
</script>
