import dayjs from 'dayjs'
import { SOCKETS } from '@/shared/api'
import { type TMessage } from '@/shared/types'

export const sendMessage = async (message: TMessage, chatId: number, adminId: number) => {
  message.sendTime = dayjs().format('HH:mm')

  console.log('message', message)

  if (message.text.trim() || !!message.file) {
    message.chatId = chatId
    message.adminId = adminId
    SOCKETS.emit('message', message)
    message.text = ''
    message.file = ''
  }
}
