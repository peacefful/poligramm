<template>
  <div class="flex-grow">
    <div class="bg-white h-16 px-2 flex justify-between">
      <button class="flex items-center">
        <div class="bg-default p-2 rounded-full mr-2">
          <Icon class="h-8 w-8" name="usersGroup" />
        </div>
        <p class="font-bold">{{ chatName }}</p>
      </button>
      <button>
        <Icon class="h-7 w-7" name="menu" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/shared/ui/icon'
import { Button } from '@/shared/ui/button'

defineProps<{
  chatName: string
}>()
</script>
