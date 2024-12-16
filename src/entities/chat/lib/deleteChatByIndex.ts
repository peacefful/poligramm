import type { TDeleteChat } from "../model/types"

export const deleteChatByIndex = (deleteChat: TDeleteChat) => {
  console.log('deleteChatByIndex');
  
  return deleteChat.chats.filter(chat => chat.id !== deleteChat.id)
}