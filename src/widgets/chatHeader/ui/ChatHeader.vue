<template>
  <header @click="$emit('openModal')" class="cursor-pointer mb-20">
    <div
      class="fixed top-0 left-[383px] right-0 bg-white h-[70px] dark:bg-black px-4 flex justify-between items-center"
    >
      <div class="flex items-center">
        <div class="bg-default p-2 rounded-full mr-2">
          <UsersGroupIcon class="h-8 w-8" />
        </div>
        <h1 class="font-bold text-xl">{{ chatName }}</h1>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import UsersGroupIcon from '@/shared/assets/icons/UsersGroupIcon.vue'

defineProps<{ chatName?: string }>()
defineEmits(['openModal'])
</script>
