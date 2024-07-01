<template>
  <div class="text-red-500 animate-fade-down animate-once animate-duration-150" v-if="isError">
    <slot />
  </div>
</template>

<script setup lang="ts">
type TError = {
  isError: boolean
}
defineProps<TError>()
</script>
