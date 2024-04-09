import { defineStore } from 'pinia'
import { ApiUser } from '@/entities/user'
import { storage } from '@/shared/lib/utils'
import { type TUser } from '@/shared/types'

const id: string | null = storage.getData('id')

export const useUsersStore = defineStore('userStore', {
  state: () => {
    return {
      user: {} as TUser,
      users: [] as TUser[]
    }
  },
  getters: {
    getUsername(state) {
      return `${state.user.name} ${state.user.surname}`
    }
  },
  actions: {
    getUser() {
      ApiUser.fetchUser(id).then((res) => {
        if (res instanceof Error) return res.message
        this.user = res as TUser
      })
    },
    getUsers() {
      ApiUser.fetchUsers().then((res) => {
        if (res instanceof Error) return res.message
        this.users = res as TUser[]
      })
    }
  }
})