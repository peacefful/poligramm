import { onMounted, ref } from 'vue'
import { type IMenu } from '@/shared/types'

export const useToogleModal = () => {
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

export const useToogleMenu = (menu: IMenu) => {
  const toggle = () => (menu.isOpen = true)

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
