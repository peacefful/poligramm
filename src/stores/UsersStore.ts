import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/iUsers'
import axios from 'axios'
import { storage } from '@/utils/storage'
import { USERS_API } from '@/api/usersApi'

const users = axios.create({
	baseURL: USERS_API,
})

users.defaults.headers.common['Authorization'] = storage.getData('token')

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
			this.user = (await users.get(`http://localhost:3000/api/users/${storage.getData("id")}`)).data
		},
		async getUsersData() {
			this.users = (await users.get('http://localhost:3000/api/users')).data
		}
	}
})