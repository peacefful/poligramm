import Cookies from "js-cookie"
import { storage } from "@/shared/lib/utils"

export const clearSession = (): boolean => {
  Cookies.remove('uuid')
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
  storage.clearData()
  return true
}