import { defineStore } from 'pinia'
import { ApiChat } from '@/entities/chat'
import { type TChat } from '@/shared/types'
import { type TLoginChat } from '@/entities/chat'

export const useChatsStore = defineStore('chatsStore', {
  state: () => {
    return {
      chat: {} as TChat,
      chats: [] as TChat[],
      currentChat: {} as TLoginChat
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
    },

    setLoginChatData(chatData: TLoginChat): TLoginChat {
      this.currentChat = chatData

      this.getChat(chatData.id)

      return chatData
    }
  }
})
