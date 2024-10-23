import dayjs from 'dayjs'
import { SOCKETS } from '@/shared/api'
import { type TMessage } from '@/shared/types'

export const sendMessage = async (message: TMessage) => {
  message.sendTime = dayjs().format('HH:mm')
  
  if (message.text.trim()) {
    SOCKETS.emit('message', message)
    message.text = ''
  }
}
