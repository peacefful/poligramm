<template>
  <div class="flex items-center justify-between p-2">
    <div class="flex items-center cursor-pointer">
      <UserIcon />
      <div class="text-xl ml-1">
        {{ username }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ApiUser } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import { ref } from 'vue'
import UserIcon from '@/shared/assets/icons/UserIcon.vue'

const username = ref<string>()
const id: string | null = storage.getData('id')

ApiUser.getUser(id).then((user) => {
  username.value = `${user?.name} ${user?.surname}`
})
</script>
