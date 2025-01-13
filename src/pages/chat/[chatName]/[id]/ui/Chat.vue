<template>
  <MainLayout>
    <div v-if="chatStore?.chat" class="flex flex-col justify-between min-h-screen">
      <ChatHeader @open-modal="openModal" :chat-name="chatStore?.chat?.roomName" />
      <div>
        <Messages
          v-for="message in messagesStore.getMessages(chatStore.chat.messages)"
          :key="message.userId"
          :message="message"
        />
        <SendMessageForm :chat-id="chatStore.chat.id" :uuid="uuid" />
      </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center min-h-screen">
      <p class="text-white bg-black p-2 rounded-xl">Чата был удален</p>
    </div>
    <Modal class="w-[1300px] h-[800px]" @close-modal="closeModal" :is-open-modal="isOpenModal">
      <AnalysisChat @close-modal="closeModal" :chat="chatStore.chat" />
    </Modal>
    <Notification
      :is-invite-room="isInviteRoom"
      :chatTitle="inviteChat.title"
      @enter-chat="
        enterChat(inviteChat.uuid, inviteChat.title, inviteChat.roomId, closeNotification)
      "
      @close-notification="closeNotification"
    />
  </MainLayout>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ChatHeader } from '~/widgets/chatHeader'
import { SendMessageForm } from '~/widgets/sendMessageForm'
import { useChatsStore, useMessagesStore, type TJoinChat } from '~/entities/chat'
import { Messages } from '~/entities/chat'
import { joinChatByRoute } from '~/entities/chat'
import { useCloseChat } from '~/entities/chat'
import { MainLayout } from '~/shared/ui/layouts/main'
import { useEnterChat, useToggleModal } from '~/shared/lib/hooks'
import { Modal } from '~/shared/ui/modal'
import { AnalysisChat } from '~/widgets/analysisChat'
import { SOCKETS } from '~/shared/api'
import { Notification } from '~/entities/chat'

useCloseChat()

const route = useRoute()

const { isOpenModal, closeModal, openModal } = useToggleModal()

const messagesStore = useMessagesStore()
const chatStore = useChatsStore()

const joinChat: TJoinChat = reactive({
  route: route.fullPath,
  getChat: chatStore.getChat
})

let uuid: string = joinChatByRoute(joinChat)

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
  roomId: null
})

const closeNotification = () => (isInviteRoom.value = false)

SOCKETS.emit('personalInvite', useCookie('uuid').value)

SOCKETS.on('messageInvite', async (uuidRoom, titleRoom, userUuid, roomId) => {
  inviteChat.title = titleRoom
  inviteChat.uuid = uuidRoom
  inviteChat.roomId = roomId
  inviteChat.userUuid = userUuid === useCookie('uuid').value

  if (inviteChat.title && inviteChat.uuid && inviteChat.userUuid) {
    isInviteRoom.value = true
    setTimeout(() => (isInviteRoom.value = false), 5000)
  }
})

const { enterChat } = useEnterChat()
</script>
