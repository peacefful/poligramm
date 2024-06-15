import { SOCKETS } from '@/shared/api'
import { type TMessage } from '@/shared/types'
import { useMessagesStore } from '../model'

export const sendMessage = async (message: TMessage) => {
  const messagesStore = useMessagesStore()

  SOCKETS.on('newMessage', () => {
    messagesStore.setMessages({ ...message })
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })
    message.text = ''
  })

  if (message.text.trim()) {
    SOCKETS.emit('newMessage', ...Object.values(message))
  }
}
