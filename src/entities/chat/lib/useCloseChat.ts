import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

export const useCloseChat = () => {
  const router = useRouter()

  function handleEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') router.push('/chats')
  }

  onMounted(() => {
    window.addEventListener('keydown', handleEsc)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEsc)
  })
}
