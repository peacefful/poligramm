import { defineStore } from 'pinia'
import { ApiUser } from '@/entities/user'
import { type TUser } from '@/shared/types'

export const useUsersStore = defineStore('usersStore', {
  state: () => {
    return {
      user: {} as TUser,
      users: [] as TUser[]
    }
  },
  actions: {
    getUsers() {
      ApiUser.fetchUsers().then((res) => {
        if (res instanceof Error) return res.message
        this.users = res as TUser[]
      })
    },
    getUser(id: string | null) {
      ApiUser.fetchUser(id).then((res) => {
        if (res instanceof Error) return res.message
        this.user = res as TUser
      })
    },
    getUsername() {
      return `${this.user.name} ${this.user.surname}`
    }
  }
})
