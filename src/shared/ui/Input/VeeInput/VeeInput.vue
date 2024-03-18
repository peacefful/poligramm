<template>
  <input v-bind="$attrs" v-model="value" :type="type || 'text'" />
  <div class="text-red-600">
    {{ errorMessage }}
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

interface IVeeInput {
  name: string
  type?: string
  modelValue: string
}

const veeInputProps = defineProps<IVeeInput>()

const { value, errorMessage } = useField(() => veeInputProps.name, undefined, {
  syncVModel: true
})
</script>
