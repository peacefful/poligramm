<template>
  <div class="flex gap-2">
    <button 
      @click="updateLang('kz')" 
      :class="checkCurrentLang('kz')
    ">
      KZ
    </button>
    <button 
      @click="updateLang('ru')" 
      :class="checkCurrentLang('ru')"
    >
      RU
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSwitchLang } from '@/entities/language'

const { updateLang, checkCurrentLang } = useSwitchLang()
</script>

<style scoped>
@import url('./style.module.scss');
</style>
