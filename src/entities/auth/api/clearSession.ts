import Cookies from "js-cookie"
import { storage } from "@/shared/lib/utils"

export const clearSession = (): boolean => {
  Cookies.remove('refreshToken')
  Cookies.remove('uuid')
  storage.clearData()

  return true
}