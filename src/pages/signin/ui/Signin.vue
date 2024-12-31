<template>
  <div class="signin">
    <LoginForm />
  </div>
  <div class="hidden sm:block">
    <SwitcherLang class="flex justify-end mr-4" />
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from "@/features/auth";
import { SwitcherLang } from "@/features/switcher-lang";
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
