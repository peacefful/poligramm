import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/iUsers'
import axios from 'axios'
import { storage } from '@/utils/storage'

export const useUsersStore = defineStore('users', {
	state: () => {
		return {
			user: {} as IUser,
			users: [] as IUser[]
		}
	},
	getters : {
		allUsers: (state) => state.users.filter(user => user.id !== Number(storage.getData("id")))
	},
	actions: {
		async getUserData() {
			this.user = (await axios.get(`http://localhost:3000/api/users/${storage.getData("id")}`)).data
		},
		async getUsersData() {
			this.users = (await axios.get('http://localhost:3000/api/users')).data
		}
	}
})