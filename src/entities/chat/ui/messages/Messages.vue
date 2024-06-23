<template>
  <div
    class="bg-default text-white rounded-2xl p-2 my-4 mx-4"
    :class="{ 'ml-auto': userId === message.id }"
  >
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
