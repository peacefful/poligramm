<template>
  <input type="text" v-model="value" />
</template>

<script setup lang="ts">
const value = defineModel<string>('value')
</script>
