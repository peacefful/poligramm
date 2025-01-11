import type { TMessage } from '@/shared/types'
import { useMessagesStore } from '../model'
import { SOCKETS } from '@/shared/api'

export const getMessages = async () => {
  const messagesStore = useMessagesStore()

  SOCKETS.on('message', (data: TMessage) => {
    messagesStore.setMessages(data)
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight)
    })
  })
}
