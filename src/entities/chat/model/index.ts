import { defineStore } from 'pinia'
import { ApiChat } from '@/entities/chat'
import { type TChat } from '@/shared/types'

export const useChatsStore = defineStore('chatsStore', {
  state: () => {
    return {
      chat: {} as TChat,
      chats: [] as TChat[]
    }
  },
  actions: {
    getChats() {
      ApiChat.fetchChats().then((res) => {
        if (res instanceof Error) return res.message
        this.chats = res as TChat[]
      })
    },
    getChat(id: string | null) {
      ApiChat.fetchChat(id).then((res) => {
        if (res instanceof Error) return res.message
        this.chat = res as TChat
      })
    }
  }
})
