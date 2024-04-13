<template>
  <img :src="`/public/icons/${name}.svg`" alt="" />
</template>

<script setup lang="ts">
type TIcon = {
  name: string
}

defineProps<TIcon>()
</script>
