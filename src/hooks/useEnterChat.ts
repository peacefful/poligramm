import { ref } from "vue"

export const useEnterChat = () => {
	const showChats = ref<boolean>(true)

	const uuid = ref<string>('')
	const room = ref<string>('')

	const closeChat = () => showChats.value = true

	const enterChat = (uuidRoom: string, roomName: string, isShowNotification?: boolean) => {
		showChats.value = false

		uuid.value = uuidRoom
		room.value = roomName

		isShowNotification = false;
	}

	return { showChats, closeChat, uuid, room, enterChat }
}