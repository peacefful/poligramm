<template>
  <article class="flex flex-col">
    <div
      class="bg-default text-white rounded-2xl my-2 p-3 break-words inline-block max-w-xl dark:bg-black"
      :class="{
        'ml-auto mr-4': checkUserMessage(userId) === +message.userId,
        'mr-auto ml-4': checkUserMessage(userId) !== +message.userId
      }"
    >
      <a v-if="message.file" target="_blank" class="cursor-pointer" :href="message.file">
        <DownloadFileIcon />
      </a>
      <template v-else>{{ message.text }}</template>
      <p class="text-xs text-right">
        {{ checkUserMessage(userId) ? t('you') : message.username }}
        {{ message.sendTime }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { type TMessage } from '@/shared/types'
import DownloadFileIcon from '@/shared/assets/icons/DownloadFileIcon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

type TPropsMessages = {
  message: TMessage
}

const props = defineProps<TPropsMessages>()

const userId = useCookie('userId')

// const checkUserMessage = () => {
//   if (userId.value) return +userId.value === +props.message.userId
// }

const checkUserMessage = (userId: string | null) => {
  return userId !== null ? +userId : 0
}
</script>
