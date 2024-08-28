<template>
  <aside class="fixed overflow-y-auto bg-white h-screen shadow-lg flex w-full sm:w-[440px]">
    <div class="w-full">
      <div class="flex gap-2 p-4 bg-black text-white">
        <BurgerMenuButton />
        <SearchInput v-model="searchData.chatName" />
      </div>
      <hr />
      <div
        v-if="userStore?.user?.chats?.length"
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
import { reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { SearchInput } from '@/features/user'
import { ChatCard, searchChats, useChatsStore } from '@/entities/chat'
import { BurgerMenuButton } from '@/entities/common'
import { useUsersStore } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import type { TSearchChat, TLoginChat } from '@/entities/chat'
import { v4 as uuidv4 } from 'uuid'

const router = useRouter()
const { t } = useI18n({ useScope: 'global' })

const id: string | null = storage.getData('id')

const userStore = useUsersStore()
userStore.getUser(id)

const searchData = reactive<TSearchChat>({
  chatName: '',
  chats: userStore.user.chats
})

watch(
  () => userStore.user.chats,
  (newChats) => {
    searchData.chats = newChats
  }
)

const chatStore = useChatsStore()

const loginChat = (loginChatData: TLoginChat) => {
  chatStore.setLoginChatData(loginChatData) &&
    router.push({
      name: 'Chat',
      params: {
        chatName: loginChatData.roomName,
        // Было до этого так: id: loginChatData.id
        id: loginChatData.id,
        uuid: loginChatData.uuid
      }
    })
}
</script>