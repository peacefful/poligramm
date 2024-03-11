<template>
  <div class="input-img">
    <input :type="type" :id="type" class="hidden" />
    <label :for="type" class="cursor-pointer">
      <img :src="src" alt="" />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  type: string
}>()
</script>

<style scoped>
.input-img {
  @apply rounded-2xl bg-[#0054A8] p-6 ml-4;
}
</style>
