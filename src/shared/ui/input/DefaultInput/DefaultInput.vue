<template>
  <input
    :type="type ?? 'text'" 
    :placeholder="placeholder" 
    v-bind="$attrs" 
    v-model="value" 
  />
</template>

<script setup lang="ts">
type TInput = {
  placeholder?: string
  type?: string
}

defineProps<TInput>()

const value = defineModel<string>('value')
</script>
