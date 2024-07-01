import type { TMenu } from "@/shared/types"
import { onMounted } from "vue"

export const useToggleMenu = (menu: TMenu) => {
  const toggle = (): boolean => (menu.isOpenMenu = true)

  onMounted(() => {
    const handlerClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const lastClass = Object.values(e.target.classList).pop()
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
