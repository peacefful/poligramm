<template>
  <section class="mt-8" v-for="(analiseChat, index) in analiseChatByMounth" :key="index">
    <section v-if="analiseChat.userAnaliseMessage?.length">
      <h1 class="font-bold text-xl leading-tight">
        {{ analiseChat.mounthName }}
      </h1>
      <Table :rows :cols="analiseChat.userAnaliseMessage" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { Table } from '@/shared/ui/table'
import type { TAnaliseChatOfMounth } from '~/entities/chat'

type TAnaliseChatByMounth = {
  analiseChatByMounth: TAnaliseChatOfMounth[]
}

defineProps<TAnaliseChatByMounth>()

const rows = ['Имя', 'Файловые сообщения', 'Текстовые сообщения', 'Общее количество']
</script>
