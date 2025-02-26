<template>
  <table class="mt-2 w-[150%] border-collapse">
    <thead>
      <tr v-for="(row, index) in rows" :key="index">
        <th class="table-header">{{ row }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(col, index) in cols" :key="index">
        <td class="table-cell">{{ col }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
type TTable = {
  rows: string[]
  cols: unknown[]
}

defineProps<TTable>()
</script>

<style scoped lang="scss">
@use './style.module.scss';
</style>
