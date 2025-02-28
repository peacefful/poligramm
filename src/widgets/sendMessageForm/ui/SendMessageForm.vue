<template>
  <form
    autocomplete="off"
    @submit.prevent="ApiChat.sendMessage(messagesStore.messagesData, chatId, adminId)"
    class="relative bottom-0 mx-0 mb-0 rounded-none md:sticky md:bottom-3 md:mx-4 md:mb-3 md:rounded-2xl flex justify-center items-center bg-white px-6 dark:bg-[#212121]"
  >
    <SendFileButton />
    <textarea
      @keydown.enter.prevent="ApiChat.sendMessage(messagesStore.messagesData, chatId, adminId)"
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
import { ApiChat } from '@/entities/chat'
import { useMessagesStore } from '@/entities/chat'
import { useRoute } from 'vue-router'

const sendMessageFormProps = defineProps<{
  uuid: string
  chatId: number
  adminId: number
}>()

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()
const messagesStore = useMessagesStore()

const userId = useCookie('userId')

const route = useRoute()

messagesStore.setMessagesData({
  userId: userId.value ? userId.value : null,
  chatId: sendMessageFormProps.chatId,
  text: '',
  sendTime: '',
  sendDate: '',
  file: '',
  username: usersStore.username,
  uuid: sendMessageFormProps.uuid,
  adminId: sendMessageFormProps.adminId
})

watch(sendMessageFormProps, () => {
  messagesStore.messagesData.uuid = sendMessageFormProps.uuid
})

ApiChat.getMessages()
</script>
