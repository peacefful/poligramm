import { onUpdated, ref, type Ref } from 'vue'

export const useToogleModal = () => {
  const isOpenModal = ref<boolean>(false)

  const openModal = () => (isOpenModal.value = true)
  const closeModal = () => (isOpenModal.value = false)

  return { isOpenModal, openModal, closeModal }
}

export const useToogleMenu = (
  isOpenElement: Ref<boolean>,
  targetElement: Ref<HTMLElement | null>
) => {
  const toogle = () => (isOpenElement.value = !isOpenElement.value)

  onUpdated(() => {
    const clickHandler = (event: MouseEvent) => {
      if (
        !event.target ||
        !(event.target instanceof Element) ||
        (!event.target.closest('.bg-blue-600') &&
          !event.target.closest('.p-1') &&
          event.target !== targetElement.value)
      ) {
        isOpenElement.value = false
      }
    }

    if (isOpenElement.value) {
      document.body.addEventListener('click', clickHandler)
    } else {
      document.body.removeEventListener('click', clickHandler)
    }
  })

  return { toogle }
}
