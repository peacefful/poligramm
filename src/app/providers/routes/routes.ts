import { isVerifyToken } from "./isVerifyToken"

export const routes = [
  {
    path: "/",
    name: "Signin",
    component: () => import("@/pages/signin"),
    beforeEnter: isVerifyToken
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("@/pages/signup"),
    beforeEnter: isVerifyToken
  },
  {
    path: "/chats",
    name: "Chats",
    component: () => import("@/pages/chats")
  }
]