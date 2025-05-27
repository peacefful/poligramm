<template>
  <aside
    class="fixed overflow-y-auto bg-white h-screen shadow-lg flex dark:bg-black w-full sm:w-[383px]"
  >
    <section class="w-full">
      <section class="flex gap-2 p-4 bg-black text-white">
        <BurgerMenuButton />
        <SearchInput v-model="searchData.chatName" />
      </section>
      <hr />
      <section
        v-if="userStore?.user?.chats?.length"
        v-for="chat in searchChats(searchData)"
        :key="chat.id"
      >
        <ChatCard
          @login-chat="
            loginChat({
              id: chat.id,
              roomName: chat.roomName,
              uuid: chat.uuid,
              adminId: chat.adminId
            })
          "
          :chatName="chat.roomName"
          last-message="Новое сообщение"
          time="12:43"
        />
      </section>
      <div v-else class="mt-4 flex justify-center">
        <Button @click="openModal" color="primary" :is-rounded-lg="true">{{
          t('createChat', 2)
        }}</Button>
      </div>
    </section>
    <Modal class="w-[600px]" @close-modal="closeModal" :is-open-modal="isOpenModal">
      <ChatForm @close-modal="closeModal" />
    </Modal>
  </aside>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { SearchInput } from '@/features/user'
import { ChatCard, searchChats, useChatsStore } from '@/entities/chat'
import { BurgerMenuButton } from '@/entities/common'
import { useUsersStore } from '@/entities/user'
import { Button } from '@/shared/ui/button'
import type { TSearchChat, TLoginChat } from '@/entities/chat'
import { useMessagesStore } from '@/entities/chat'
import { Modal } from '@/shared/ui/modal'
import { ChatForm } from '@/features/chat'
import { useToggleModal } from '@/shared/lib/hooks'
import { useI18n } from 'vue-i18n'

const router = useRouter()

const id = useCookie('userId')

const { isOpenModal, closeModal, openModal } = useToggleModal()

const { t } = useI18n({ useScope: 'global' })

const messagesStore = useMessagesStore()
const userStore = useUsersStore()

userStore.getUser(id.value ? +id.value : null)

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

const currentLoginChat = useCookie('currentLoginChat')

const chatsStore = useChatsStore()

const chatStore = useChatsStore()

const loginChat = (loginChatData: TLoginChat) => {
  chatStore.setLoginChatData(loginChatData)
  const { roomName, id, uuid } = loginChatData

  // currentLoginChat.value = id.toString()

  // chatsStore.setСurrentLoginChat(id)

  router.push({
    name: 'Chat',
    params: {
      chatName: roomName,
      id,
      uuid
    }
  })

  messagesStore.clearMessages()
}
</script>
