import { SOCKETS } from '@/shared/api'

type TNotificationJoinChat = {
  uuid: string
  username: string
}

export const notificationJoinChat = (notificationJoinChatData: TNotificationJoinChat) => {
  SOCKETS.emit('userJoin', notificationJoinChatData.uuid, notificationJoinChatData.username)
}
