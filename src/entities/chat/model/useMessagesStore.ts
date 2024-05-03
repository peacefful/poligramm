import type { TMessage } from "@/shared/types";
import { defineStore } from "pinia";

export const useMessagesStore = defineStore('messagesStore', {
  state: () => {
    return {
      messages: [] as TMessage[]
    }
  },
  actions: {
    sendMessages(messages: TMessage) {
      this.messages.push(messages)
    }
  }
})