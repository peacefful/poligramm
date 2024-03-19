<template>
  <button :type="type" :class="['button', `button_${color}`]">
    {{ title }}
  </button>
</template>

<script setup lang="ts">
interface IButtonProps {
  title: string
  color?: string
  type?: 'submit' | 'reset'
}

withDefaults(defineProps<IButtonProps>(), {
  type: 'submit'
})
</script>

<style scoped>
@import url('./style.module.scss');
</style>
