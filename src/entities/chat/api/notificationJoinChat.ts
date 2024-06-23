import { SOCKETS } from '@/shared/api'
import { type TNotificationJoinChat } from '../model'

export const notificationJoinChat = (notificationJoinChatData: TNotificationJoinChat) => {
  SOCKETS.emit('userJoin', notificationJoinChatData.uuid, notificationJoinChatData.username)

  SOCKETS.on('userJoin', (username) => {
    const copyUserMessage = { ...notificationJoinChatData.userMessage }
    copyUserMessage.id = '0'
    copyUserMessage.text = username
    notificationJoinChatData.setMessage(copyUserMessage)
  })
}
