import axios from 'axios';
import { defineStore } from 'pinia';
import { storage } from '@/utils/storage';
import { USERS_API } from '@/api/users';
import type { IUser } from '@/interfaces/iUsers';

const users = axios.create({
	baseURL: USERS_API,
});

export const useUsersStore = defineStore('users', {
	state: () => ({
		user: {} as IUser,
		users: [] as IUser[],
	}),
	getters: {
		allUsers: (state) => {
			return state.users.filter(user => user.id !== Number(storage.getData("id")))
		}
	},
	actions: {
		async getUserData() {
			const token = storage.getData('token');
			if (token) {
				users.defaults.headers.common['Authorization'] = token;
				this.user = (await users.get(`${USERS_API}/${storage.getData("id")}`)).data;
			} else {
				console.error('Токен недоступен');
			}
		},
		async getUsersData() {
			const token = storage.getData('token');
			if (token) {
				users.defaults.headers.common['Authorization'] = token;
				this.users = (await users.get(USERS_API)).data;
			} else {
				console.error('Токен недоступен');
			}
		},
	},
});
