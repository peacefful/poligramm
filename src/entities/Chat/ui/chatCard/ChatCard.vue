<template>
  <div
    class="p-3 flex justify-between cursor-pointer hover:bg-blue-500 hover:text-white ease-out duration-200"
  >
    <div class="flex items-center">
      <UserIcon />
      <div class="ml-1">
        <p class="font-bold text-xl">{{ username }}</p>
        <p class="text-lx">{{ lastMessage }}</p>
      </div>
    </div>
    <div>{{ time }}</div>
  </div>
  <hr>
</template>

<script setup lang="ts">
import UserIcon from '@/shared/assets/icons/UserIcon.vue'

type TUserCard = {
  username: string
  lastMessage: string
  time: string
}

defineProps<TUserCard>()
</script>
