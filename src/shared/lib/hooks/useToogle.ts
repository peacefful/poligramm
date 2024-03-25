import { onMounted, ref } from 'vue'
import { type IMenu } from '@/shared/types'

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

export const useToggleMenu = (menu: IMenu) => {
  const toggle = (): boolean => (menu.isOpen = true)

  onMounted(() => {
    const handlerClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const lastClass = Object.values(e.target.classList).pop()
        if (lastClass === menu.className) {
          menu.isOpen = false
        }
      }
    }

    if (!menu.isOpen) {
      document.body.removeEventListener('click', handlerClick)
    }
    document.body.addEventListener('click', handlerClick)
  })

  return { toggle }
}
