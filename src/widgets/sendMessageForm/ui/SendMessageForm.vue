<template>
  <form
    autocomplete="off"
    @submit.prevent="ApiChat.sendMessage(messagesData)"
    class="relative bottom-0 mx-0 mb-0 rounded-none md:sticky md:bottom-3 md:mx-4 md:mb-3 md:rounded-2xl flex justify-center items-center bg-white px-6"
  >
    <SendFileButton />
    <textarea
      @keydown.enter.prevent="ApiChat.sendMessage(messagesData)"
      v-bind="$attrs"
      class="outline-none border-solid resize-none overflow-hidden w-full pt-5"
      :placeholder="t('writeMessage')"
      v-model="messagesData.text"
    />
    <SendMessageButton />
  </form>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { SendFileButton } from '@/features/chat'
import { SendMessageButton } from '@/features/chat'
import { useUsersStore } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import { type TMessage } from '@/shared/types'
import { ApiChat } from '@/entities/chat'

const sendMessageFormProps = defineProps<{
  uuid: string
}>()

const { t } = useI18n({ useScope: 'global' })

const usersStore = useUsersStore()

const userId: string = String(storage.getData('id'))

usersStore.getUser(userId)

const messagesData: TMessage = reactive({
  id: userId,
  text: '',
  sendTime: dayjs().format('HH:mm'),
  username: usersStore.username,
  uuid: sendMessageFormProps.uuid
})

ApiChat.getMessages()
</script>
