import type { TMenu } from '@/shared/types'
import { onMounted } from 'vue'

export const useToggleMenu = (menu: TMenu) => {
  const toggle = (): boolean => {
    return (menu.isOpenMenu = true)
  }

  onMounted(() => {
    const handlerClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const lastClass = Object.values(e.target.classList).pop()
        if (menu.name === 'functionsMenu') {
          if (lastClass !== menu.className) {
            menu.isOpenMenu = false
          }
        }

        if (lastClass === menu.className) {
          menu.isOpenMenu = false
        }
      }
    }

    if (!menu.isOpenMenu) {
      document.body.removeEventListener('click', handlerClick)
    }
    document.body.addEventListener('click', handlerClick)
  })

  return { toggle }
}
