<template>
  <section class="mt-8" v-for="(analiseChat, index) in analiseChatByMounth" :key="index">
    <section v-if="analiseChat.userAnaliseMessage?.length">
      <h1 class="font-bold text-xl leading-tight">
        {{ t(`${analiseChat.mounthName}`) }}
      </h1>
      <Table :rows :cols="analiseChat.userAnaliseMessage" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { Table } from '@/shared/ui/table'
import type { TAnaliseChatOfMounth } from '~/entities/chat'
import { useI18n } from 'vue-i18n'

type TAnaliseChatByMounth = {
  analiseChatByMounth: TAnaliseChatOfMounth[]
}

console.log('333')

defineProps<TAnaliseChatByMounth>()

const { t } = useI18n({ useScope: 'global' })

const rows = [t('name'), t('filesMessages'), t('textsMessages'), t('quantity', 0)]
</script>
