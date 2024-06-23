export const routes = [
  {
    path: '/',
    name: 'Signin',
    component: () => import('@/pages/signin'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/pages/signup'),
  },
  {
    path: '/chats',
    name: 'Chats',
    component: () => import('@/pages/chats')
  },
  {
    path: '/chats/:chatName/:id/:uuid',
    name: 'Chat',
    component: () => import('@/pages/chat')
  }
]