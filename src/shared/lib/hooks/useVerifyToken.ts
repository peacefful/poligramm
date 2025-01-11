import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export async function useVerifyToken(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const refreshToken = useCookie("refreshToken");
  refreshToken ? next("/chat") : next();
}
