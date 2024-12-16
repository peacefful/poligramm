import { defineStore } from 'pinia'
import type { TMessage } from '@/shared/types'

export const useMessagesStore = defineStore('messagesStore', {
  state: () => {
    return {
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
    clearMessages() {
      this.messages = []
    }
  }
})
