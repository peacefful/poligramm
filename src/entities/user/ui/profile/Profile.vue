<template>
  <div class="flex items-center justify-between p-2 py-4 bg-black">
    <div class="flex items-center cursor-pointer text-white">
      <UserIcon />
      <div class="text-2xl font-bold ml-1">
        {{ usersStore.getUsername() }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import UserIcon from '@/shared/assets/icons/UserIcon.vue'
import { useUsersStore } from '@/entities/user'
import { isValidToken, storage } from '@/shared/lib/utils'
import { ApiAuth } from '@/entities/auth'

const id: string | null = storage.getData('id')

const usersStore = useUsersStore()
usersStore.getUser(id)
</script>
