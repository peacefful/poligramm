<template>
  <Table :rows :cols="analiseChatByMounth" />
</template>

<script setup lang="ts">
import { Table } from '@/shared/ui/table'
import type { TAnaliseChatOfMounth } from '~/entities/chat'

type TAnaliseChatByMounth = {
  analiseChatByMounth: TAnaliseChatOfMounth
}

defineProps<TAnaliseChatByMounth>()

const rows = ['Имя', 'Файловые сообщения', 'Текстовые сообщения', 'Общее количество']
</script>
