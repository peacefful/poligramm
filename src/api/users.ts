import router from "@/router"
import axios from "axios"
import { storage } from "@/utils/storage"
import { validateRegistrationData } from "@/utils/validateData"
import type { IUser } from "@/interfaces/iUsers"

export const USERS_API = 'http://localhost:3000/api/users'

export const authorization = async (login: string, password: string) => {
	try {
		if (login.trim() && password.trim()) {
			const authUser = await axios.post(`${USERS_API}/auth`, {
				login: login,
				password: password,
			})

			if (authUser) {
				storage.setData('token', authUser.data.token)
				storage.setData('id', authUser.data.id)
				storage.setData('uuid', authUser.data.uuid)
				storage.setData('username', `${authUser.data.name} ${authUser.data.surname} `)
				router.push("chats")
			} else {
				new Error("Ошибка")
			}
		}
	} catch (error) {
		console.log(error);
	}
}

export const registration = async (authUser: IUser) => {
	try {
		if (validateRegistrationData(authUser)) {
			const user = await axios.post(USERS_API, { ...authUser })
			user ? router.push("/") : new Error("Ошибка, регистрация не завершена")
		}
	} catch (error) {
		console.log(error);
	}
}