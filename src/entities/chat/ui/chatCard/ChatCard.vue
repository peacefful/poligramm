<template>
  <div
    @click="$emit('login-chat')"
    class="p-3 flex justify-between cursor-pointer hover:bg-[#f0f0f0] ease-out duration-200"
  >
    <div class="flex items-center">
      <div class="bg-default p-2 rounded-full">
        <UserGroupIcon />
      </div>
      <div class="ml-4">
        <p class="font-bold text-xl">{{ chatName }}</p>
        <!-- <p class="text-lx">{{ lastMessage }}</p> -->
      </div>
    </div>
    <div>{{ time }}</div>
  </div>
  <hr />
</template>

<script setup lang="ts">
import UserGroupIcon from '@/shared/assets/icons/UserGroupIcon.vue'

type TUserCard = {
  chatName: string
  lastMessage: string
  time: string
}

defineProps<TUserCard>()

defineEmits(['login-chat'])
</script>