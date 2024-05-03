<template>
  <div 
    v-if="message.id === userId" 
    class="bg-default text-white rounded-2xl p-2 ml-auto mr-4 my-4"
  >
    <div>helsdgssdgsdlo</div>
    <div class="text-xs text-right">12:53</div>
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
