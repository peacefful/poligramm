<template>
  <button :type="type" :class="[buttonStyles, `button_${color}`]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type IButtonProps = {
  isRoundedFull?: boolean
  isRoundedLg?: boolean
  color?: string
  type?: 'submit' | 'reset'
}

const buttonProps = withDefaults(defineProps<IButtonProps>(), {
  type: 'submit'
})

defineEmits(['click'])

const buttonStyles = reactive({
  button: true,
  'rounded-full': buttonProps.isRoundedFull,
  'rounded-lg': buttonProps.isRoundedLg
})
</script>

<style scoped>
@import url('./style.module.scss');
</style>
