<template>
  <article
    @click="$emit('login-chat')"
    @keydown.enter="$emit('login-chat')"
    tabindex="0"
    class="p-3 flex justify-between cursor-pointer hover:bg-[#f0f0f0] dark:hover:bg-[#121212] ease-out duration-200"
  >
    <section class="flex items-center">
      <div class="bg-default p-2 rounded-full">
        <UserGroupIcon />
      </div>
      <div class="ml-4">
        <p class="font-bold text-xl">{{ chatName }}</p>
        <!-- <p class="text-lx">{{ lastMessage }}</p> -->
      </div>
    </section>
    <!-- <p>{{ time }}</p> -->
  </article>
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
