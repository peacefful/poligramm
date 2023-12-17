import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

export const useChatsStore = defineStore('chats', {
	state: () => {
		return {
			currentRoom: storage.getData("uuid")
		}
	},
	actions: {
		updateRoom (newRoom:string) {
			return this.currentRoom = newRoom
		}
	}
})