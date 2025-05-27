import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SOCKETS } from '~/shared/api'
import { useLoginChatState } from '~/entities/user/model/useLoginChatState'
import { useUsersStore } from '~/entities/user'
import { useChatsStore } from '~/entities/chat'

export const useEnterChat = () => {
  const router = useRouter()

  const userId = useCookie('userId')
  const showChats = ref<boolean>(true)

  const userLoginChat = useLoginChatState()

  const userStore = useUsersStore()
  const chatsStore = useChatsStore()

  const userLoginChatCookie = useCookie('userLoginChatCookie')
  const currentLoginChat = useCookie<string>('currentLoginChat', {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 48 * 7
  })

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

    SOCKETS.emit('saveChat', adminId, userId.value, uuid.value, (response: { id: number }) => {
      // userLoginChat.value = response.id.toString()
      // userLoginChatCookie.value = response.id.toString()

      console.log('response.id', response.id)

      chatsStore.setСurrentLoginChat(response.id)

      if (import.meta.client) {
        localStorage.setItem('localeCurrentIdChat', response.id.toString())
      }
    })

    router.push({
      name: 'Chat',
      params: {
        chatName: room.value,
        id: chatId.value,
        uuid: uuid.value
      }
    })

    userStore.getUser(userId.value ? +userId.value : 0)

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
