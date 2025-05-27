<template>
  <MainLayout>
    <strong class="text-2xl">
      {{ chatStore.chat.id }}
    </strong>
    <section v-if="chatStore?.chat.id" class="flex flex-col justify-between min-h-screen">
      <ChatHeader @open-modal="getCurrentIdChat" :chat-name="chatStore?.chat?.roomName" />
      <div>
        <Messages
          v-for="(message, index) in messagesStore.getMessages(chatStore.chat.messages)"
          :key="`${index}-${message.userId}`"
          :message="message"
        />
        <SendMessageForm
          :admin-id="chatStore.chat.adminId"
          :chat-id="chatStore.chat.id"
          :uuid="uuid"
        />
      </div>
    </section>
    <section
      v-else-if="chatStore.isAccessDenied"
      class="flex flex-col justify-center items-center min-h-screen"
    >
      <p class="text-white bg-black p-2 rounded-xl">Вы не имеете доступ к данному чату</p>
    </section>
    <section v-else class="flex flex-col justify-center items-center min-h-screen">
      <p class="text-white bg-black p-2 rounded-xl">Чата был удален</p>
    </section>
    <Modal class="w-[1300px] h-[800px]" @close-modal="closeModal" :is-open-modal="isOpenModal">
      <AnalysisChat @close-modal="closeModal" :chat="chatStore.chat" />
    </Modal>
    <Notification
      :is-invite-room="isInviteRoom"
      :chatTitle="inviteChat.title"
      @enter-chat="saveAndEnterChat"
      @close-notification="logoutChat"
    />
  </MainLayout>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ChatHeader } from '@/widgets/chatHeader'
import { SendMessageForm } from '@/widgets/sendMessageForm'
import { useChatsStore, useMessagesStore, type TJoinChat } from '@/entities/chat'
import { Messages } from '@/entities/chat'
import { joinChatByRoute } from '@/entities/chat'
import { useCloseChat } from '@/entities/chat'
import { MainLayout } from '@/shared/ui/layouts/main'
import { useEnterChat, useToggleModal } from '@/shared/lib/hooks'
import { Modal } from '@/shared/ui/modal'
import { AnalysisChat } from '@/widgets/analysisChat'
import { SOCKETS } from '@/shared/api'
import { Notification } from '@/entities/chat'
import { useUsersStore } from '~/entities/user'

useCloseChat()

const route = useRoute()

useSeoMeta({
  title: typeof route.params.chatName === 'string' ? route.params.chatName : 'Чат'
})

const { isOpenModal, closeModal, openModal } = useToggleModal()

const userUuid = useCookie('uuid')
const userId = useCookie('userId')

const messagesStore = useMessagesStore()
const chatStore = useChatsStore()
const userStore = useUsersStore()

const joinChat: TJoinChat = reactive({
  route: route.fullPath,
  getChat: chatStore.getChat
})

onMounted(() => {
  userStore.getUser(userId.value ? +userId.value : 0)
})

let uuid: string = joinChatByRoute(joinChat)

const getCurrentIdChat = () => {
  const currentChat = userStore.user.chats.find((chat) => {
    return chatStore.chat.uuid === uuid
  })

  setTimeout(() => {
    console.log('currentChat', currentChat)
    if (currentChat?.id) {
      chatStore.setСurrentLoginChat(currentChat?.id)
    }
  }, 100)

  openModal()
}

watch(route, () => {
  uuid = joinChatByRoute({
    route: route.fullPath,
    getChat: chatStore.getChat
  })
})

const isInviteRoom = ref(false)
const inviteChat = reactive({
  title: '',
  uuid: '',
  userUuid: false,
  roomId: null,
  adminId: 0
})

const closeChatByUuid = () => {
  SOCKETS.emit('closeChatByUuid', {
    adminId: inviteChat.adminId,
    userUuid: userUuid.value
  })
}

const closeNotification = () => (isInviteRoom.value = false)

const logoutChat = () => {
  closeNotification()
  closeChatByUuid()
}

SOCKETS.emit('personalInvite', useCookie('uuid').value)

SOCKETS.on('messageInvite', async (uuidRoom, titleRoom, userUuid, roomId, adminId) => {
  inviteChat.title = titleRoom
  inviteChat.uuid = uuidRoom
  inviteChat.roomId = roomId
  inviteChat.userUuid = userUuid === useCookie('uuid').value
  inviteChat.adminId = adminId

  if (inviteChat.title && inviteChat.uuid && inviteChat.userUuid) {
    isInviteRoom.value = true
    setTimeout(() => (isInviteRoom.value = false), 5000)
  }
})

const { enterChat } = useEnterChat()

const saveAndEnterChat = () => {
  enterChat(
    inviteChat.uuid,
    inviteChat.title,
    inviteChat.roomId,
    inviteChat.adminId,
    closeNotification
  )
}
</script>
