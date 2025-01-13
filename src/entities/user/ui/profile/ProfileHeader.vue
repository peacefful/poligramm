<template>
  <div class="flex items-center justify-between p-2 py-4 bg-black ">
    <div @click="redirectProfilePage" class="flex items-center cursor-pointer text-white">
      <UserIcon />
      <div class="text-2xl font-bold ml-1 dark:text-white">
        {{ usersStore.username }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/entities/user'
import { useRedirectProfilePage } from '@/entities/user'
import UserIcon from '@/shared/assets/icons/UserIcon.vue'

const usersStore = useUsersStore()

const { redirectProfilePage } = useRedirectProfilePage()
</script>
