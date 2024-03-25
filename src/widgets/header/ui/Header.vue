<template>
  <header class="flex justify-between p-1 bg-white shadow-lg">
    <BurgerMenu />
    <Logout />
  </header>
</template>

<script setup lang="ts">
import { BurgerMenu } from '@/entities/common/ui'
import { Logout } from '@/features/user'
</script>
