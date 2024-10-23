import { type TMenu } from '@/shared/types'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
  state() {
    return {
      burgerMenu: {
        isOpenMenu: false,
        className: 'z-10'
      } as TMenu
    }
  }
})
