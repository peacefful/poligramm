<template>
  <button :type="type" :class="['button', `button_${color}`]" @click="$emit('click')">
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

defineEmits(['click'])
</script>

<style scoped>
@import url('./style.module.scss');
</style>
