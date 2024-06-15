<template>
  <button @click="logout" class="hover:bg-[#f0f0f0] p-2 rounded-full ease-out duration-200">
    <LogoutIcon />
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ApiAuth } from '@/entities/auth'
import LogoutIcon from '@/shared/assets/icons/LogoutIcon.vue'

const router = useRouter()

const logout = () => {
  ApiAuth.clearSession() && router.push('/')
}
</script>
