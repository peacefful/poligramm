import axios from "axios"
import { storage } from "@/utils/storage"
import { v4 as uuidv4 } from 'uuid';

// http://localhost:3000
// https://srv.poligramm.kz

export const CHAT_API = 'https://srv.poligramm.kz/api/chats'

const chats = axios.create({
	baseURL: CHAT_API,
})

chats.defaults.headers.common['Authorization'] = storage.getData('token')

export const addChat = async (room: string) => {
	try {
		if (room.trim()) {
			await chats.post(CHAT_API, {
				roomName: room,
				uuid: uuidv4(),
				userId: Number(storage.getData("id"))
			})
			location.reload()
		}
	} catch (error) {
		console.log(error);
	}
}

export const deleteChat = async (id: number) => {
	try {
		await chats.delete(`${CHAT_API}/${id}`)
		location.reload()
	} catch (error) {
		console.log(error);
	}
}