import { onMounted, ref } from 'vue'
import { type TMenu } from '@/shared/types'

export const useToggleModal = () => {
  const isOpenModal = ref<boolean>(false)

  const openModal = () => {
    return (isOpenModal.value = true)
  }
  const closeModal = () => {
    return (isOpenModal.value = false)
  }

  return {
    isOpenModal,
    openModal,
    closeModal
  }
}

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
