<template>
  <aside class="fixed overflow-x-auto bg-white h-screen shadow-lg flex w-full sm:w-[440px]">
    <div class="w-full">
      <div class="flex gap-2 p-4">
        <BurgerMenuButton />
        <SearchInput v-model="searchData.chatName" />
      </div>
      <hr />
      <div 
        v-if="chatStore?.chats.length" 
        v-for="chat in searchChats(searchData)" 
        :key="chat.id"
      >
        <ChatCard
          @get-uuid-chat="getChatByUuid(chat.uuid)"
          :chatName="chat.roomName" 
          last-message="Привет, как дела?" 
          time="12:43" 
        />
      </div>
      <div v-else class="text-center mt-2">
        {{ t('noChats') }}
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { BurgerMenuButton } from '@/entities/common'
import { ChatCard } from '@/entities/chat'
import { SearchInput } from '@/features/user'
import { searchChats, getChatByUuid } from '@/entities/chat'
import { useChatsStore } from '@/entities/chat/model'
import { type TSearchChat } from '@/entities/chat'
import { reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const chatStore = useChatsStore()
chatStore.getChats()

const searchData = reactive<TSearchChat>({
  chatName: '',
  chats: chatStore.chats
})

watch(() => chatStore.chats,(newChats) => {
  searchData.chats = newChats
})
</script>
