<template>
  <form
    autocomplete="off"
    @submit.prevent="ApiChat.sendMessage(messagesStore.messagesData, chatId)"
    class="relative bottom-0 mx-0 mb-0 rounded-none md:sticky md:bottom-3 md:mx-4 md:mb-3 md:rounded-2xl flex justify-center items-center bg-white px-6 dark:bg-[#212121]"
  >
    <SendFileButton />
    <textarea
      @keydown.enter.prevent="ApiChat.sendMessage(messagesStore.messagesData, chatId)"
      v-bind="$attrs"
      class="outline-none border-solid resize-none overflow-hidden w-full pt-5 dark:bg-[#212121]"
      :placeholder="t('writeMessage')"
      v-model="messagesStore.messagesData.text"
    />
    <SendMessageButton />
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { SendFileButton } from '@/features/chat'
import { SendMessageButton } from '@/features/chat'
import { useUsersStore } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import { type TMessage } from '@/shared/types'
import { ApiChat } from '@/entities/chat'
import { useMessagesStore } from '@/entities/chat'
import { useRoute } from 'vue-router'

const sendMessageFormProps = defineProps<{
  uuid: string
  chatId: number
}>()

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()
const messagesStore = useMessagesStore()

const userId = useCookie('userId')

const route = useRoute()

// const messagesData: TMessage = reactive({
//   userId: userId,
//   chatId: sendMessageFormProps.chatId,
//   text: '',
//   sendTime: '',
//   file: '',
//   username: usersStore.username,
//   uuid: sendMessageFormProps.uuid
// })

messagesStore.setMessagesData({
  userId: userId.value ? userId.value : null,
  chatId: +route.params.id,
  text: '',
  sendTime: '',
  file: '',
  username: usersStore.username,
  uuid: sendMessageFormProps.uuid
})

watch(sendMessageFormProps, () => {
  messagesStore.messagesData.uuid = sendMessageFormProps.uuid
})

ApiChat.getMessages()
</script>
