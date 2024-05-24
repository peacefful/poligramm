<template>
  <button @click="logout" class="hover:bg-[#f0f0f0] p-2 rounded-full ease-out duration-200">
    <LogoutIcon />
  </button>
</template>

<script setup lang="ts">
import LogoutIcon from '@/shared/assets/icons/LogoutIcon.vue'
import { ApiAuth } from '@/entities/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  ApiAuth.clearSession() && router.push('/')
}
</script>
