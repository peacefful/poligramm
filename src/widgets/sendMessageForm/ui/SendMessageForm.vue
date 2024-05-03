<template>
  <form
    autocomplete="off"
    @submit.prevent="sendMessages"
    class="sticky bottom-0 mx-4 mb-3 rounded-2xl flex justify-center items-center bg-white px-6"
  >
    <SendFileButton />
    <Textarea 
      v-model="messagesData.text" 
      class="w-full pt-5" 
      :placeholder="t('writeMessage')" 
    />
    <SendMessageButton />
  </form>
</template>

<script setup lang="ts">
import { Textarea } from '@/shared/ui/textarea'
import { SendFileButton } from '@/features/chat'
import { SendMessageButton } from '@/features/chat'
import { useChatsStore } from '@/entities/chat'
import { storage } from '@/shared/lib/utils'
import { useUsersStore } from '@/entities/user'
import { type TMessage } from '@/shared/types'
import { useI18n } from 'vue-i18n'
import { reactive, computed } from 'vue'
import dayjs from 'dayjs'

const { t } = useI18n({ useScope: 'global' })

const userId: string | null = storage.getData('id')

const messagesStore = useChatsStore()
const usersStore = useUsersStore()

usersStore.getUser(userId)

const messagesData: TMessage = reactive({
  id: userId,
  text: "",
  sendTime: dayjs().format('HH:mm'),
  username: usersStore.getUsername()
})

const sendMessages = async () => {
  if (messagesData.text.trim()) {
    console.log(messagesData);
    messagesData.text = ""
  }
}
</script>
