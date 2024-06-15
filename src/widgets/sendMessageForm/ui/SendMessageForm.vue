<template>
  <form
    autocomplete="off"
    @submit.prevent="sendMessages"
    class="relative bottom-0 mx-0 mb-0 rounded-none md:sticky md:bottom-3 md:mx-4 md:mb-3 md:rounded-2xl flex justify-center items-center bg-white px-6"
  >
    <SendFileButton />
    <textarea
      @keydown.enter.prevent="sendMessages"
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
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SendFileButton } from '@/features/chat'
import { SendMessageButton } from '@/features/chat'
import { useChatsStore, useMessagesStore } from '@/entities/chat'
import { useUsersStore } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import { type TMessage } from '@/shared/types'
import { Textarea } from '@/shared/ui/textarea'
import { ApiChat } from '@/entities/chat'
import { SOCKETS } from '@/shared/api'

// const sendMessageFormProps = defineProps<{
//   uuid: string
// }>()

const { t } = useI18n({ useScope: 'global' })

const messagesStore = useMessagesStore()
const usersStore = useUsersStore()

const userId: string = String(storage.getData('id'))

usersStore.getUser(userId)

const messagesData: TMessage = reactive({
  id: userId,
  text: '',
  sendTime: dayjs().format('HH:mm'),
  username: usersStore.getUsername(),
})

const sendMessages = () => {
  if (messagesData.text.trim()) {
    messagesStore.setMessages({ ...messagesData })
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })
    messagesData.text = ''
  }
}
</script>
