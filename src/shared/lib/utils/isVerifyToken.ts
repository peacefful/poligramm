import Cookies from 'js-cookie'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export async function isVerifyToken(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token: boolean = Boolean(Cookies.get("refreshToken"))
  token ? next('/chats') : next()
}