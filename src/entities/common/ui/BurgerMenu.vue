<template>
  <button @click="openAside">
    <BurgerMenuIcon />
  </button>
</template>

<script setup lang="ts">
import BurgerMenuIcon from '@/shared/assets/icons/BurgerMenuIcon.vue'
import { inject } from 'vue'

const { openAside } = inject('toggleAside') as () => boolean
</script>
