<template>
  <NuxtPage/>
</template>

<script setup lang="ts">
import {useSwitchTheme} from "@/entities/common";

const {useCheckThemeMode} = useSwitchTheme()

useCheckThemeMode()
</script>