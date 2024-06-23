<template>
  <label>
    {{ t(name) }}
    <input 
      v-bind="$attrs" 
      v-model="value" 
      :type="type || 'text'" 
    />
    <div v-if="errorMessage" class="text-red-600">
      {{ t(errorName) }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

type IVeeInput = {
  name: string
  type?: string
  errorName: string
  modelValue: string
}

const veeInputProps = defineProps<IVeeInput>()

const { value, errorMessage } = useField(() => veeInputProps.name, undefined, {
  syncVModel: true
})
</script>
