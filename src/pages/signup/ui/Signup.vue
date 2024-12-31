<template>
  <div class="signin">
    <RegForm />
  </div>
  <div class="hidden sm:block">
    <SwitcherLang class="flex justify-end mr-4" />
  </div>
</template>

<script setup lang="ts">
import { RegForm } from "@/features/auth";
import { SwitcherLang } from "@/features/switcher-lang";
</script>

<style scoped>
.signin {
  @apply min-h-[95vh]
  flex
  justify-center 
  items-center
  overflow-x-hidden;
}
</style>
