<template>
  <div class="bg-default text-white rounded-2xl p-2 mr-4 my-4 ml-auto">
    <div>{{ message.text }}</div>
    <div class="text-xs text-right">{{ message.sendTime }}</div>
  </div>
</template>

<script setup lang="ts">
import { storage } from '@/shared/lib/utils'
import { type TMessage } from '@/shared/types'

type TPropsMessages = {
  message: TMessage
}

defineProps<TPropsMessages>()

const userId: string | null = storage.getData('id')
</script>
