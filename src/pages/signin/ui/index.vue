<template>
  <div class="signin">
    <LoginForm />
  </div>
  <div class="hidden sm:block">
    <div class="flex justify-between items-center px-3">
      <SwitchTheme />
      <SwitcherLang />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from '@/features/auth'
import { SwitcherLang } from '@/features/switcherLang'
import { SwitchTheme } from '@/features/switchTheme'
import dayjs from 'dayjs'

useSeoMeta({
  title: 'Вход',
  description: 'Авторизация существующих пользователей'
})

console.log(dayjs().format('MMM'));

</script>

<style scoped>
/* @import url('@/shared/assets/styles/auth-reg-layout.scss'); */

.signin {
  @apply min-h-[95vh]
  flex
  justify-center 
  items-center
  overflow-x-hidden;
}
</style>
