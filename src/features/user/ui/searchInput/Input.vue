<template>
  <input 
    class="my-2 w-full input search-input" 
    type="text" 
    placeholder="Поиск" 
    v-model="value" 
  />
</template>

<script setup lang="ts">
const value = defineModel('value')
</script>

<style scoped lang="scss">
@import url("./style.module.scss");
</style>