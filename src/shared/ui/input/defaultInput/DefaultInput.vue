<template>
  <input
    ref="inputFocus"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    class="dark:bg-[#212121]"
    v-bind="$attrs"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

type TInput = {
  placeholder?: string
  type?: string
}

defineProps<TInput>()

const value = defineModel<string>('value')

const inputFocus = ref<null | HTMLInputElement>(null)

onMounted(() => {
  if (inputFocus.value) inputFocus.value.focus()
})
</script>
