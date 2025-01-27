import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/signin'),
      meta: {
        layout: 'default',
      },
    },
    {
      name: 'Signup',
      path: '/signup',
      component: () => import('@/pages/signup'),
      meta: {
        layout: 'default'
      }
    },
    {
      name: 'Chats',
      path: '/chats',
      component: () => import('@/pages/chats'),
      meta: {
        layout: 'custom',
        middleware: function(to, from) {
          const accessToken = useCookie('accessToken')
          if (!accessToken.value) return navigateTo('/')
        },
      }
    },
    {
      name: 'Chat',
      path: '/chat/:chatName/:id/:uuid',
      component: () => import('~/pages/chat/[chatName]/[id]'),
      meta: {
        layout: 'custom',
        middleware: function(to, from) {
          const accessToken = useCookie('accessToken')
          if (!accessToken.value) return navigateTo('/')
        },
      }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: () => import('@/pages/profile'),
      meta: {
        layout: 'default'
      }
    }
  ]
} satisfies RouterConfig
