import axios from "axios"

export const CHAT_API = 'http://localhost:3000/api/chats'

export const deleteChat = async (id:number) => {
	try {
		axios.delete(`${CHAT_API}/${id}`)
		location.reload()
	} catch (error) {
		console.log(error);
	}
}