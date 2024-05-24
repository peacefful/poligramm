import type { TMessage } from "@/shared/types";
import { defineStore } from "pinia";

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
    }
  }
})