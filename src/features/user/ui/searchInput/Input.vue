<template>
  <DefaultInput
    class="w-full search-input bg-[#242424]"
    type="text"
    :placeholder="t('search')"
    v-model="value"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { DefaultInput } from '@/shared/ui/input'

const { t } = useI18n({ useScope: 'global' })

const value = defineModel('value')
</script>

<style scoped lang="scss">
@import url('./style.module.scss');
</style>
