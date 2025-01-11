<template>
  <div class="flex gap-2">
    <SunIcon/>
    <label class="toggle-switch">
      <input type="checkbox" v-model="isToggled"/>
      <span class="switch"></span>
    </label>
    <MoonIcon/>
  </div>
</template>

<script setup>
import MoonIcon from "@/shared/assets/icons/MoonIcon.vue";
import SunIcon from "@/shared/assets/icons/SunIcon.vue";
import { useSwitchTheme } from "@/entities/common";

const {isToggled, useUpdateThemeMode, useCheckThemeMode } = useSwitchTheme()

useUpdateThemeMode()
useCheckThemeMode()
</script>

<style scoped lang="scss">
@use "./style.module.scss";
</style>
