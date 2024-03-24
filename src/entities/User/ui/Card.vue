<template>
  <div class="flex items-center p-2">
    <UserIcon />
    <div class="text-xl ml-1">
      {{ username }}
    </div>
  </div>
</template>

<script setup lang="ts">
import UserIcon from '@/shared/assets/icons/UserIcon.vue'
import { storage } from '@/shared/lib/utils'

const username: string | null = storage.getData('username')
</script>
