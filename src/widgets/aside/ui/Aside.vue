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
      <ChatCard 
        username="Иван Иванов" 
        last-message="Привет, как дела?" 
        time="12:43" 
      />
      <ChatCard 
        username="Иван Иванов" 
        last-message="Привет, как дела?" 
        time="12:43" 
      />
      <ChatCard 
        username="Иван Иванов" 
        last-message="Привет, как дела?" 
        time="12:43" 
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { BurgerMenuButton } from '@/entities/common'
import { ChatCard } from '@/entities/chat'
import { SearchInput } from '@/features/user'
import { ref } from 'vue'

const searchUser = ref<string>('')
</script>