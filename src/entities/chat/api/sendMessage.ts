import { SOCKETS } from '@/shared/api'
import { type TMessage } from '@/shared/types'

export const sendMessage = async (message: TMessage) => {
  if (message.text.trim()) {
    SOCKETS.emit('message', message)
    message.text = ''
  }
}
