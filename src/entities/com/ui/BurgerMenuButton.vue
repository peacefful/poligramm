<template>
  <button @click="openBurgerMenu">
    <BurgerMenuIcon />
  </button>
</template>

<script setup lang="ts">
import BurgerMenuIcon from '@/shared/assets/icons/BurgerMenuIcon.vue'
import { inject } from 'vue'

const { openBurgerMenu } = inject('toggleBurgerMenu') as () => boolean
</script>