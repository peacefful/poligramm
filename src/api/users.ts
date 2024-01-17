import router from "@/router"
import axios from "axios"
import { storage } from "@/utils/storage"
import { validateRegistrationData } from "@/utils/validateData"
import type { IUser } from "@/interfaces/iUsers"

export const USERS_API = 'https://srv.poligramm.kz/api/users'

export const authorization = async (login: string, password: string) => {
	try {
		if (login.trim() && password.trim()) {
			const isAuthUser = await axios.post(`${USERS_API}/auth`, {
				login: login,
				password: password,
			})

			if (isAuthUser) {
				storage.setData('token', isAuthUser.data.token)
				storage.setData('id', isAuthUser.data.id)
				storage.setData('uuid', isAuthUser.data.uuid)
				storage.setData('username', `${isAuthUser.data.name} ${isAuthUser.data.surname} `)
				router.push("chats")
			} else {
				new Error("Ошибка")
			}
		}
	} catch (error) {
		console.log(error);
	}
}

export const registration = async (user: IUser) => {
	try {
		if (validateRegistrationData(user)) {
			const isRegUser = await axios.post(USERS_API, { ...user })
			isRegUser ? router.push("/") : new Error("Ошибка, регистрация не завершена")
		}
	} catch (error) {
		console.log(error);
	}
}