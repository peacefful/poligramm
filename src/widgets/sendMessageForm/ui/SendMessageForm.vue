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
import { Textarea } from '@/shared/ui/textarea'
import { SendFileButton } from '@/features/chat'
import { SendMessageButton } from '@/features/chat'
import { useChatsStore, useMessagesStore } from '@/entities/chat'
import { storage } from '@/shared/lib/utils'
import { useUsersStore } from '@/entities/user'
import { type TMessage } from '@/shared/types'
import { useI18n } from 'vue-i18n'
import { reactive, computed } from 'vue'
import dayjs from 'dayjs'

const { t } = useI18n({ useScope: 'global' })

const userId: string = String(storage.getData('id'))

const messagesStore = useMessagesStore()
const usersStore = useUsersStore()

usersStore.getUser(userId)

const messagesData: TMessage = reactive({
  id: userId,
  text: '',
  sendTime: dayjs().format('HH:mm'),
  username: usersStore.getUsername()
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
