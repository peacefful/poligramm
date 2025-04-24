<template>
  <table class="mt-2 w-[100%] border-collapse">
    <thead>
      <tr>
        <th v-for="(row, index) in rows" :key="index" class="table-header">{{ row }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(col, index) in cols" :key="index">
        <td class="table-cell">
          {{ col.username }}
        </td>
        <td class="table-cell">
          {{ col.userFileLength }}
        </td>
        <td class="table-cell">
          {{ col.userTextLength }}
        </td>
        <td class="table-cell">
          {{ col.userMessagesSum }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
type TTable = {
  rows: string[]
  cols: Record<string, unknown>[]
}

defineProps<TTable>()
</script>

<style scoped lang="scss">
@use './style.module.scss';
</style>
