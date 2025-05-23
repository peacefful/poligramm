import { defineStore } from 'pinia'
import { ApiChat } from '@/entities/chat'
import { type TLoginChat } from '@/entities/chat'
import { type TChat } from '@/shared/types'

export const useChatsStore = defineStore('chatsStore', {
  state: () => {
    return {
      chat: {} as TChat,
      chats: [] as TChat[],
      currentSelectedChat: {} as TLoginChat,
      isAccessDenied: false
    }
  },
  actions: {
    getChat(id: number | string) {
      ApiChat.fetchChat(+id).then((res) => {
        if (res instanceof Error) {
          this.isAccessDenied = true
          return res.message
        }
        this.chat = res as TChat
      })
    },
    removeChat(id: number) {
      ApiChat.deleteChat(id)
    },
    setLoginChatData(chatData: TLoginChat): TLoginChat {
      this.currentSelectedChat = chatData
      // this.getChat(chatData.id)
      return chatData
    }
  }
})
