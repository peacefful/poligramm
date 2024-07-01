import { ref } from 'vue'

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