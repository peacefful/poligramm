import type { IUser } from "@/interfaces/iUsers"
import router from "@/router"
import { storage } from "@/utils/storage"
import axios from "axios"
import { ref, computed } from "vue"

export const USERS_API = 'http://localhost:3000/api/users'

const users = axios.create({
	baseURL: USERS_API,
})

users.defaults.headers.common['Authorization'] = storage.getData('token')

export const authorization = async (login:string, password:string) => {
	try {
		if (login && password) {
			const authUser = await axios.post(`${USERS_API}/auth`, {
				login: login,
				password: password,
			})

			if (authUser) {
				storage.setData('token', authUser.data.token)
				storage.setData('id', authUser.data.id)
				storage.setData('uuid', authUser.data.uuid)
				router.push("home")
			} else {
				new Error("Ошибка")
			}
		}
	} catch (error) {
		console.log(error);
	}
}

export const registration = async (
	surname:string,
	name:string,
	appointment:string,
	rank:string,
	login:string,
	password:string,
	role:string,
	phone:string,
) => {
	if (
		surname.trim() && 
		name.trim() && 
		appointment.trim() && 
		rank.trim() && 
		login.trim() && 
		password.trim() && 
		role.trim() && 
		phone.trim()
	) {
		const user = await axios.post(USERS_API, {
			surname: surname,
			name: name,
			appointment: appointment,
			rank: rank,
			login: login,
			password: password,
			role: role,
			phone: phone,
		})

		user ? router.push("/") : new Error("Ошибка, регистрация не завершена")
	}
}

export const getUsers = computed(async (): Promise<IUser[]>  => {
	const allUsers = ref<IUser[]>([])
	const result:IUser[] = (await users.get(USERS_API)).data

	allUsers.value = result.filter(user => user.id !== Number(storage.getData("id")))

	return allUsers.value
})