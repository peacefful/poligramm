import { storage } from "@/shared/lib/utils"
import Cookies from "js-cookie"

export const logout = (): void => {
  Cookies.remove('refreshToken')
  Cookies.remove('uuid')
  storage.clearData()
}