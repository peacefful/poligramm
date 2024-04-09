<template>
  <button @click="AuthApi.logout">
    <router-link to="/">
      <LogoutIcon />
    </router-link>
  </button>
</template>

<script setup lang="ts">
import LogoutIcon from '@/shared/assets/icons/LogoutIcon.vue'
import { AuthApi } from '@/entities/auth'
</script>
