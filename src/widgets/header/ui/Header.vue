<template>
  <header class="flex justify-between p-1 bg-white shadow-lg">
    <button @click="$emit('toogle-menu')">
      <BurgerMenuIcon />
    </button>
    <button>
      <LogoutIcon />
    </button>
  </header>
</template>

<script setup lang="ts">
import LogoutIcon from '@/shared/assets/icons/LogoutIcon.vue'
import BurgerMenuIcon from '@/shared/assets/icons/BurgerMenuIcon.vue'

defineEmits(['toogle-menu'])
</script>
