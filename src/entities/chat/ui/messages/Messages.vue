<template>
  <div class="flex flex-col">
    <div
      class="bg-white text-black rounded-2xl my-2 p-3 break-words inline-block max-w-xl dark:text-white dark:bg-black"
      :class="{
        'ml-auto mr-4': message.userId !== null && checkUserMessage(userId) === +message.userId,
        'mr-auto ml-4': message.userId !== null && checkUserMessage(userId) !== +message.userId
      }"
    >
      <a v-if="message.file" target="_blank" class="cursor-pointer" :href="message.file">
        <DownloadFileIcon />
      </a>
      <div v-else>{{ message.text }}</div>
      <div class="text-xs text-right">
        {{
          message.userId !== null && checkUserMessage(userId) === +message.userId
            ? t('you')
            : message.username
        }}
        {{ message.sendTime }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type TMessage } from '@/shared/types'
import DownloadFileIcon from '@/shared/assets/icons/DownloadFileIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

type TPropsMessages = {
  message: TMessage
}

defineProps<TPropsMessages>()

const userId = useCookie('userId')

const checkUserMessage = (userId?: string | null) => {
  return userId !== null && !!userId ? +userId : 0
}
</script>
