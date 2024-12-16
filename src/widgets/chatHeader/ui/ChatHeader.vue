<template>
  <header @click="$emit('openModal')" class="cursor-pointer mb-20">
    <div
      class="fixed top-0 left-[383px] right-0 bg-white h-[70px] px-4 flex justify-between items-center"
    >
      <div class="flex items-center">
        <div class="bg-default p-2 rounded-full mr-2">
          <Icon class="h-8 w-8" name="usersGroup" />
        </div>
        <h1 class="font-bold text-xl">{{ chatName }}</h1>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@/shared/ui/icon'

defineProps<{ chatName?: string }>()
defineEmits(['openModal'])
</script>
