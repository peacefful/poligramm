import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { storage } from '@/shared/lib/utils'
import Cookies from 'js-cookie'

export async function isVerifyToken(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token: boolean = Boolean(Cookies.get("refreshToken"))
  token ? next('/chats') : next()
}