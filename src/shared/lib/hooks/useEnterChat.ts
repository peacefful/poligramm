import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {SOCKETS} from "~/shared/api";

export const useEnterChat = () => {
  const router = useRouter()

  const userId = useCookie('userId')

  const showChats = ref<boolean>(true)

  const uuid = ref<string>('')
  const room = ref<string>('')
  const chatId = ref<number | null>(null)

  const closeChat = () => (showChats.value = true)

  const enterChat = (
    uuidRoom: string,
    roomName: string,
    roomId: number | null,
    adminId: number,
    closeNotification?: Function
  ) => {
    showChats.value = false
    uuid.value = uuidRoom
    room.value = roomName
    chatId.value = roomId

    router.push({
      name: 'Chat',
      params: {
        chatName: room.value,
        id: chatId.value,
        uuid: uuid.value
      }
    })

    SOCKETS.emit('saveChat', adminId, userId.value, uuid.value)

    closeNotification ? closeNotification() : null
  }

  return {
    showChats,
    uuid,
    room,
    closeChat,
    enterChat
  }
}
