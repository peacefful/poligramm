<template>
  <section class="flex gap-2">
    <button @click="updateLang('kz')" :class="checkCurrentLang('kz')">KZ</button>
    <button @click="updateLang('ru')" :class="checkCurrentLang('ru')">RU</button>
  </section>
</template>

<script setup lang="ts">
import { useSwitchLang } from '@/entities/common'

const { updateLang, checkCurrentLang } = useSwitchLang()
</script>

<style scoped>
@import url('./style.module.scss');
</style>
