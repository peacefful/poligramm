<template>
  <div v-for="message in messages" :key="message.id">
    <div class="bg-blue-500 items-end user-message" v-if="userId === message.id">
      <div class="user-message_text">{{ message.text }}</div>
      <span class="user-message_time">{{ t('you') }} {{ message.sendTime }}</span>
    </div>
    <div v-else-if="message.id === 0" class="user-message">
      <div class="text-center p-2">{{ message.text }} {{ t('joinChat') }}</div>
    </div>
    <div v-else class="bg-blue-400 user-message">
      <div class="user-message_text">{{ message.text }}</div>
      <span class="user-message_time">{{ message.username }} {{ message.sendTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { IMessage } from '@/interfaces/iMessage'
import { storage } from '@/utils/storage'

const { t } = useI18n({ useScope: 'global' })

defineProps<{
  messages: IMessage[]
}>()

const userId: number | null = Number(storage.getData('id'))
</script>

<style scoped lang="scss">
.user-message {
  @apply p-3 flex flex-col rounded-2xl mt-3;

  &_text {
    @apply max-w-xl break-words;
  }

  &_time {
    @apply text-[13px] text-[#d1d5db];
  }
}

@media (max-width: 1400px) {
  .user-message {
    &_text {
      @apply max-w-full;
    }
  }
}
</style>
@/shared/types/iMessage