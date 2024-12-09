<template>
  <MainLayout>
    <div class="min-h-screen flex justify-center items-center">
      <div class="text-white rounded-md p-1 text-1xl bg-black">Выберите чат</div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { isValidToken } from '@/shared/lib/utils'
import { MainLayout } from '@/shared/ui/layouts/main'

const router = useRouter()

// if (!isValidToken()) router.push('/')
</script>