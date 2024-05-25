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
import { useChatsStore, useMessagesStore } from '@/entities/chat'
import { getIdByRoutePath } from '@/entities/chat'
import { Messages } from '@/entities/chat'
import { MainLayout } from '@/shared/ui/layouts/Main'

const chatStore = useChatsStore()
const messagesStore = useMessagesStore()

const id = getIdByRoutePath()

chatStore.getChat(id)
</script>
