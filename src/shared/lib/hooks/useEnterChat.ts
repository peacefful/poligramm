import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SOCKETS } from '~/shared/api'
import { useLoginChatState } from '~/entities/user/model/useLoginChatState'

export const useEnterChat = () => {
  const router = useRouter()

  const userId = useCookie('userId')
  const showChats = ref<boolean>(true)

  const userLoginChat = useLoginChatState()

  const userLoginChatCookie = useCookie('userLoginChatCookie')

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

    console.log('chatId.value', chatId.value)

    SOCKETS.emit('saveChat', adminId, userId.value, uuid.value, (response: { id: number }) => {
      userLoginChat.value = response.id.toString()
      userLoginChatCookie.value = response.id.toString()

      console.log('userLoginChatCookie.value', userLoginChatCookie.value)
    })

    router.push({
      name: 'Chat',
      params: {
        chatName: room.value,
        id: chatId.value,
        uuid: uuid.value
      }
    })

    if (closeNotification) {
      closeNotification()
    }
  }

  return {
    showChats,
    uuid,
    room,
    closeChat,
    enterChat
  }
}
