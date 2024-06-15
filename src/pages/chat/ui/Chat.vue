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
import { getIdUuidByRoutePath } from '@/entities/chat'
import { Messages } from '@/entities/chat'
import { MainLayout } from '@/shared/ui/layouts/Main'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { ApiChat } from '@/entities/chat'

const route = useRoute()

const chatStore = useChatsStore()
const messagesStore = useMessagesStore()

watch(route, () => {
  const { id, uuid } = getIdUuidByRoutePath(route.fullPath)
  console.log(uuid);
  ApiChat.joinToChat(uuid)
  chatStore.getChat(id)
})
</script>
