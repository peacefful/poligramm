<template>
  <aside class="bg-white h-screen shadow-lg flex w-auto sm:w-[440px]">
    <div class="bg-black h-screen text-center w-12 py-8">
      <BurgerMenuButton />
    </div>
    <div class="w-full">
      <div class="p-4">
        <SearchInput v-model="searchUser" />
      </div>
      <hr />
      <div v-for="chat in chatStore.chats" :key="chat.id">
        <ChatCard 
          :chatName="chat.roomName" 
          last-message="Привет, как дела?" 
          time="12:43" 
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { BurgerMenuButton } from '@/entities/common'
import { ChatCard } from '@/entities/chat'
import { SearchInput } from '@/features/user'
import { useChatsStore } from '@/entities/chat/model'
import { ref } from 'vue'

const searchUser = ref<string>('')

const chatStore = useChatsStore()
chatStore.getChats()
</script>