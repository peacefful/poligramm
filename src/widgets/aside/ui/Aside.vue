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
          @login-chat="
            loginChat({
              id: chat.id,
              roomName: chat.roomName,
              uuid: chat.uuid
            })
          "
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
import { ChatCard, searchChats, useChatsStore } from '@/entities/chat'
import { SearchInput } from '@/features/user'
import type { TSearchChat, TLoginChat } from '@/entities/chat'
import { reactive, watch } from 'vue'
import { isValidToken } from '@/shared/lib/utils'
import { ApiAuth } from '@/entities/auth'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()

const { t } = useI18n({ useScope: 'global' })

const chatStore = useChatsStore()

if (isValidToken()) {
  chatStore.getChats()
} else {
  ApiAuth.refreshToken()
  chatStore.getChats()
}

const searchData = reactive<TSearchChat>({
  chatName: '',
  chats: chatStore.chats
})

watch(
  () => chatStore.chats,
  (newChats) => {
    searchData.chats = newChats
  }
)

const loginChat = (loginChatData: TLoginChat) => {
  chatStore.setLoginChatData(loginChatData) &&
    router.push({
      name: 'Chat',
      params: {
        chatName: loginChatData.roomName,
        id: loginChatData.id
      }
    })
}
</script>
