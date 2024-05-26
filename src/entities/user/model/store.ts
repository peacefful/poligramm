import { defineStore } from 'pinia'
import { ApiUser } from '@/entities/user'
import { type TUserChat } from '@/entities/user'

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      user: {} as TUserChat,
      users: [] as TUserChat[]
    }
  },
  actions: {
    getUsers() {
      ApiUser.fetchUsers().then((res) => {
        if (res instanceof Error) return res.message
        this.users = res as TUserChat[]
      })
    },
    getUser(id: string | null) {
      ApiUser.fetchUser(id).then((res) => {
        if (res instanceof Error) return res.message
        this.user = res as TUserChat
      })
    },
    getUsername() {
      return `${this.user.name} ${this.user.surname}`
    }
  }
})
