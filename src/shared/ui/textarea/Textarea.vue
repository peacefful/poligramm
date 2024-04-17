<template>
  <textarea
    @keydown.enter.prevent=""
    v-bind="$attrs"
    class="p-1 outline-none border-solid resize-none overflow-hidden"
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
