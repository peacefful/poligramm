<template>
  <main>
    <Main v-if="useRoute().fullPath !== '/' && useRoute().fullPath !== '/registration'" />
    <div v-else>
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import Main from './components/layout/Main.vue'
import { RouterView, useRoute } from 'vue-router'
import { checkTokenExpiration } from './utils/isValidToken'

checkTokenExpiration()
</script>
