<template>
  <MainLayout>
    <div class="flex flex-col justify-between min-h-screen">
      <ChatHeader :chat-name="chatStore.currentChat.roomName" />
      <SendMessageForm />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { MainLayout } from '@/shared/ui/layouts/Main'
import { ChatHeader } from '@/widgets/chatHeader';
import { SendMessageForm } from '@/widgets/sendMessageForm'
import { useChatsStore } from '@/entities/chat';

const chatStore = useChatsStore()
</script>
