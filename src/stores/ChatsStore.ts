import { defineStore } from 'pinia'

export const useChatsStore = defineStore('chats', {
	state: () => {
		return {
			currentRoom: localStorage.getItem("uuid")
		}
	},
	actions: {
		updateRoom (newRoom:string) {
			return this.currentRoom = newRoom
		}
	}
})