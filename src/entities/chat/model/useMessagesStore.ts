import { defineStore } from 'pinia'
import type { TMessage } from '@/shared/types'

export const useMessagesStore = defineStore('messagesStore', {
  state: () => {
    return {
      messagesData: {
        userId: 0,
        chatId: 0,
        text: '',
        sendTime: '',
        file: '',
        username: '',
        uuid: '',
        adminId: 0
      } as TMessage,
      messages: [] as TMessage[]
    }
  },
  actions: {
    setMessages(messages: TMessage) {
      this.messages.push(messages)
    },
    getMessages(messages: TMessage[]) {
      this.messages = messages
      return this.messages
    },
    setMessagesData(messages: TMessage) {
      this.messagesData.userId = messages.userId
      this.messagesData.chatId = messages.chatId
      this.messagesData.username = messages.username
      this.messagesData.uuid = messages.uuid
      this.messagesData.adminId = messages.adminId
    },
    clearMessages() {
      this.messages = []
    }
  }
})
