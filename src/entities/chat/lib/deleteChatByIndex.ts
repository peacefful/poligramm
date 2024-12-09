import type { TDeleteChat } from "../model/types"

export const deleteChatByIndex = (deleteChat: TDeleteChat) => {
  return deleteChat.chats.splice(deleteChat.index, 1)
}