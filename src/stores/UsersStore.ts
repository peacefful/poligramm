import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/iUsers'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
	state: () => {
		return {
			user: {} as IUser,
			users: [] as IUser[]
		}
	},
	getters : {
		allUsers: (state) => state.users.filter(user => user.id !== Number(localStorage.getItem("id")))
	},
	actions: {
		async getUserData() {
			this.user = (await axios.get(`http://localhost:3000/api/users/${localStorage.getItem("id")}`)).data
		},
		async getUsersData() {
			this.users = (await axios.get('http://localhost:3000/api/users')).data
		}
	}
})