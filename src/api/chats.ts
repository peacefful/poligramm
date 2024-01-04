import axios from "axios"
import { storage } from "@/utils/storage"
import { v4 as uuidv4 } from 'uuid';

export const CHAT_API = 'http://195.49.210.52:3000/api/chats'

const chats = axios.create({
	baseURL: CHAT_API,
})

chats.defaults.headers.common['Authorization'] = storage.getData('token')

export const addChat = async (room: string) => {
	if (room.trim()){
		await chats.post(CHAT_API, {
			roomName: room,
			uuid: uuidv4(),
			userId: Number(storage.getData("id"))
		})
		room = ''
		location.reload()
	}
}

export const deleteChat = async (id:number) => {
	try {
		await chats.delete(`${CHAT_API}/${id}`)
		location.reload()
	} catch (error) {
		console.log(error);
	}
}