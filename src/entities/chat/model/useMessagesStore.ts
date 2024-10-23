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
    getMessages() {
      return this.messages
    },
    clearMessages() {
      this.messages = []
    }
  }
})
