<template>
  <button @click="AuthApi.logout" class="hover:bg-[#f0f0f0] p-1 rounded-md ease-out duration-200">
    <router-link to="/">
      <LogoutIcon />
    </router-link>
  </button>
</template>

<script setup lang="ts">
import LogoutIcon from '@/shared/assets/icons/LogoutIcon.vue'
import { AuthApi } from '@/entities/auth'
</script>
