import router from "@/router"
import { storage } from "@/utils/storage"
import axios from "axios"
import type { IUser } from "@/interfaces/iUsers"
import { validateRegistrationData } from "@/utils/validateData"

export const USERS_API = 'http://195.49.210.52:3000/api/users'

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
				router.push("home")
			} else {
				new Error("Ошибка")
			}
		}
	} catch (error) {
		console.log(error);
	}
}

export const registration = async (authUser: IUser) => {
	if (validateRegistrationData(authUser)) {
		const user = await axios.post(USERS_API, {...authUser})
		user ? router.push("/") : new Error("Ошибка, регистрация не завершена")
	}
}