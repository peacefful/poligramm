<template>
  <div class="flex items-center justify-between p-2">
    <div class="flex items-center cursor-pointer">
      <UserIcon />
      <div class="text-xl ml-1">
        {{ usersStore.getUsername }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import UserIcon from '@/shared/assets/icons/UserIcon.vue'
import { useUsersStore } from '@/entities/user'

const usersStore = useUsersStore()
usersStore.getUser()
</script>
