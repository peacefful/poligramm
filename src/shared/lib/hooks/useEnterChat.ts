import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { SOCKETS } from '~/shared/api'
import { useUsersStore } from '~/entities/user'

export const useEnterChat = () => {
  const router = useRouter()

  const userStore = useUsersStore()

  const userId = useCookie('userId')
  const showChats = ref<boolean>(true)

  console.log('userId useEnterChat', userId.value)

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

    SOCKETS.emit('saveChat', adminId, userId.value, uuid.value)

    if (userId.value && Array.isArray(userStore.user.chats)) {
      userStore.getUser(+userId.value)

      console.log('userStore chats', userStore.user)

      // const currentChat = userStore.user.chats.filter((chat) => chat.uuid === uuid.value)

      // console.log('currentChat', currentChat)
    }

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
