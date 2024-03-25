<template>
  <button @click="logout">
    <LogoutIcon />
  </button>
</template>

<script setup lang="ts">
import LogoutIcon from '@/shared/assets/icons/LogoutIcon.vue'
import { logout } from '@/entities/user';
</script>
