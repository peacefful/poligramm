import { onUpdated, ref, type Ref } from 'vue'
import { type IMenu } from '@/shared/types'

export const useToogleModal = () => {
  const isOpenModal = ref<boolean>(false)

  const openModal = () => (isOpenModal.value = true)
  const closeModal = () => (isOpenModal.value = false)

  return { isOpenModal, openModal, closeModal }
}

export const useToogleMenu = (menu: IMenu) => {
  const toogle = () => (menu.isOpen = !menu.isOpen)

  onUpdated(() => {
    const clickHandler = (event: MouseEvent) => {
      const target: EventTarget | null = event.target
      if (
        !target ||
        !(target instanceof Element) ||
        (!target.closest('.bg-blue-600') && !target.closest('.p-1') && target !== menu.target)
      ) {
        menu.isOpen = false
      }
    }

    if (menu.isOpen) {
      document.body.addEventListener('click', clickHandler)
    } else {
      document.body.removeEventListener('click', clickHandler)
    }
  })

  return { toogle }
}
