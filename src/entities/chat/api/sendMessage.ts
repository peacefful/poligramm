import dayjs from 'dayjs'
import { SOCKETS } from '@/shared/api'
import { type TMessage } from '@/shared/types'

export const sendMessage = async (message: TMessage, chatId: number) => {
  message.sendTime = dayjs().format('HH:mm')

  if (message.text.trim() || message.file.trim()) {
    message.chatId = chatId
    SOCKETS.emit('message', message)
    message.text = ''
  }
}
