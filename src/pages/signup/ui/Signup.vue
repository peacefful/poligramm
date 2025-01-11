<template>
  <div class="signin">
    <RegForm />
  </div>
  <div class="hidden sm:block">
    <div class="flex justify-between items-center px-3">
      <SwitchTheme/>
      <SwitcherLang/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RegForm } from "@/features/auth";
import { SwitcherLang } from "../../../features/switcherLang";
import {SwitchTheme} from "~/features/switchTheme";
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
