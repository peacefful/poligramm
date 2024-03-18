<template>
  <div class="input-img">
    <input :type="type" :id="type" class="hidden" />
    <label :for="type" class="cursor-pointer">
      <img :src="src" alt="" />
    </label>
  </div>
</template>

<script setup lang="ts">

interface IInputImg {
  src: string
  type: string
}

defineProps<IInputImg>()
</script>

<style scoped>
@import url("./style.module.scss");
</style>
