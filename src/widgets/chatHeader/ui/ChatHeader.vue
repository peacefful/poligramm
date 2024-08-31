<template>
  <header class="flex-grow">
    <div class="fixed top-0 left-[383px] right-0 bg-white h-[70px] px-4 flex justify-between items-center">
      <button class="flex items-center">
        <div class="bg-default p-2 rounded-full mr-2">
          <Icon class="h-8 w-8" name="usersGroup" />
        </div>
        <h1 class="font-bold text-xl">{{ chatName }}</h1>
      </button>
      <button>
        <Icon class="h-7 w-7" name="menu" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@/shared/ui/icon'

defineProps<{
  chatName?: string
}>()
</script>
