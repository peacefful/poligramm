<template>
  <button @click="openBurgerMenu">
    <BurgerMenuIcon />
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import BurgerMenuIcon from '@/shared/assets/icons/BurgerMenuIcon.vue'

const { openBurgerMenu } = inject('toggleBurgerMenu') as () => boolean
</script>