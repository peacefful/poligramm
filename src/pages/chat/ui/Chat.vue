<template>
  <MainLayout>
    <div class="flex flex-col justify-between min-h-screen">
      <ChatHeader :chat-name="chatStore?.chat?.roomName" />
      <Messages
        v-for="message in messagesStore.getMessages()"
        :key="message.id"
        :message="message"
      />
      <SendMessageForm />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ChatHeader } from '@/widgets/chatHeader'
import { SendMessageForm } from '@/widgets/sendMessageForm'
import { useChatsStore, useMessagesStore, type TJoinChat } from '@/entities/chat'
import { Messages } from '@/entities/chat'
import { MainLayout } from '@/shared/ui/layouts/m'
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { joinChatByRoute } from '@/entities/chat'

const route = useRoute()

const messagesStore = useMessagesStore()
const chatStore = useChatsStore()

const joinChat: TJoinChat = reactive({
  route: route.fullPath,
  getChat: chatStore.getChat
})

joinChatByRoute(joinChat)

watch(route, () => joinChatByRoute(joinChat))
</script>
