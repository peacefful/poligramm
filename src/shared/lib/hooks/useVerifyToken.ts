import Cookies from 'js-cookie'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export async function useVerifyToken(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const token: boolean = Boolean(Cookies.get("refreshToken"))
  token ? next('/chats') : next()
}