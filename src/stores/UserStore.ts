import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/iUsers'
import axios from 'axios'

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			user: {} as IUser
		}
	},
	actions: {
		async getUserData() {
			this.user = (await axios.get(`http://localhost:3000/api/users/${localStorage.getItem("id")}`)).data
		}
	}
})
