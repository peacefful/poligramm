<template>
  <table class="mt-2 w-[150%] border-collapse">
    <thead>
      <tr>
        <th class="table-header">{{ t('categories') }}</th>
        <th class="table-header">{{ t('quantity') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-cell">{{ t('textsMessages') }}</td>
        <td class="table-cell">
          {{ chatTextLength }}
        </td>
      </tr>
      <tr>
        <td class="table-cell">{{ t('filesMessages') }}</td>
        <td class="table-cell">
          {{ chatFileLength }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { type TAnaliseChat } from '@/entities/chat'

defineProps<TAnaliseChat>()

const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped lang="scss">
@use './style.module.scss';
</style>
