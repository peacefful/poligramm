<template>
  <MainLayout>
    <div class="flex flex-col justify-between min-h-screen">
      <ChatHeader :chat-name="chatStore?.chat?.roomName" />
      <Messages
        v-for="message in messagesStore.getMessages()"
        :key="message.id"
        :message="message"
      />
      <SendMessageForm :uuid="uuid" />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ChatHeader } from '@/widgets/chatHeader'
import { SendMessageForm } from '@/widgets/sendMessageForm'
import { useChatsStore, useMessagesStore, type TJoinChat } from '@/entities/chat'
import { Messages } from '@/entities/chat'
import { MainLayout } from '@/shared/ui/layouts/main'
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { joinChatByRoute } from '@/entities/chat'
import { useCloseChat } from '@/entities/chat'

useCloseChat()

const route = useRoute()

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
</script>
