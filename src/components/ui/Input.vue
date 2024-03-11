<template>
  <input
    :style="{ background: bg }"
    class="bg-zinc-900 text-zinc-300 input"
    :type="type"
    v-model="value"
    :placeholder="t('search')"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

interface IInputProps {
  value: string
  bg?: string
  type?: string
}

const inputProps = withDefaults(defineProps<IInputProps>(), {
  type: 'text'
})

const inputEmits = defineEmits(['update:value'])

const value = computed({
  get() {
    return inputProps.value
  },
  set(value) {
    inputEmits('update:value', value)
  }
})

const bg = computed(() => inputProps.bg || 'bg-zinc-900')
</script>

<style scoped lang="scss">
.input {
  transition: all ease 0.2s;

  &:focus {
    -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 128, 255, 0.58);
    -moz-box-shadow: 0px 0px 1px 1px rgba(0, 128, 255, 0.58);
    box-shadow: 0px 0px 1px 1.9px rgba(0, 128, 255, 0.58);
    padding-left: 1.5%;
  }
}
</style>
