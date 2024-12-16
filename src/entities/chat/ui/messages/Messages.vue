<template>
  <div class="flex flex-col">
    <div
      class="bg-default text-white rounded-2xl my-2  p-3 break-words inline-block max-w-xl"
      :class="{
        'ml-auto mr-4': checkUserMessage(userId) === +message.userId,
        'mr-auto ml-4': checkUserMessage(userId) !== +message.userId
      }"
    >
      <div>{{ message.text }}</div>
      <div class="text-xs text-right">{{ message.sendTime }}</div>
    </div>
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

const checkUserMessage = (userId: string | null) => {
  return userId !== null ? +userId : 0
}
</script>
