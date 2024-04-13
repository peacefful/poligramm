<template>
  <div class="rounded-full bg-default hover:bg-[#242424e7]">
    <input :type="type" :id="type" class="hidden" />
    <label :for="type" class="cursor-pointer">
      <slot/>
    </label>
  </div>
</template>

<script setup lang="ts">

interface IInputImg {
  type: string
}

defineProps<IInputImg>()
</script>
