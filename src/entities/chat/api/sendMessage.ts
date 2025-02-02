import dayjs from 'dayjs'
import { SOCKETS } from '@/shared/api'
import { type TMessage } from '@/shared/types'

export const sendMessage = async (message: TMessage, chatId: number, adminId: number) => {
  message.sendTime = dayjs().format('HH:mm')

  if (message.text.trim() || message.file.trim()) {
    message.chatId = chatId
    message.adminId = adminId
    console.log('adminId', adminId)
    console.log('message', message)
    SOCKETS.emit('message', message)
    message.text = ''
  }
}
