<template>
  <textarea
    v-bind="$attrs"
    class="rounded-md p-1" 
    :placeholder="placeholder" 
    v-model="value" 
  />
</template>

<script setup lang="ts">
type TTextarea = {
  placeholder: string
}

defineProps<TTextarea>()

const value = defineModel<string>('value')
</script>
