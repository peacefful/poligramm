import { isVerifyToken } from '@/shared/lib/utils'

export const routes = [
  {
    path: '/',
    name: 'Signin',
    component: () => import('@/pages/signin'),
    beforeEnter: isVerifyToken
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/pages/signup'),
    beforeEnter: isVerifyToken
  },
  {
    path: '/chats',
    name: 'Chats',
    component: () => import('@/pages/chats')
  },
  {
    path: '/chats/:chatName',
    name: 'Chat',
    component: () => import('@/pages/chat')
  }
]