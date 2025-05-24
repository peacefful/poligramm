import { defineStore } from 'pinia'
import { ApiUser } from '@/entities/user'
import { type TUserChat } from '@/entities/user'
import { number } from 'yup'

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      user: {} as TUserChat,
      users: [] as TUserChat[],
      username: useCookie('username').value || ''
    }
  },
  actions: {
    getUsers() {
      ApiUser.fetchUsers().then((res) => {
        if (res instanceof Error) return res.message
        this.users = res as TUserChat[]
      })
    },
    getUser(id: number | null) {
      ApiUser.fetchUser(id).then((res) => {
        if (res instanceof Error) return res.message
        this.user = res as TUserChat
        this.username = `${this.user.name} ${this.user.surname}`
        useCookie('username').value = this.username
      })
    },
    deleteChat(id: number | null) {
      return this.user.chats.filter((chat) => chat.id !== id)
    }
  }
})
