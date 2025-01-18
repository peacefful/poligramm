<template>
  <p
    class="animate-fade-down animate-once animate-duration-150"
    :class="{
      'text-red-500': typeToast === 'error',
      'text-green-500': typeToast === 'success'
    }"
  >
    <slot />
  </p>
</template>

<script setup lang="ts">
type TToast = {
  typeToast: string
}
defineProps<TToast>()
</script>
