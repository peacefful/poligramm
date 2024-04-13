<template>
  <input 
    v-bind="$attrs" 
    type="text" 
    :placeholder="placeholder" 
    v-model="value" 
  />
</template>

<script setup lang="ts">
type TInput = {
  placeholder?: string
}

defineProps<TInput>()

const value = defineModel<string>('value')
</script>
