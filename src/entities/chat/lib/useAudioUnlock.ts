import { ref, onMounted, onUnmounted } from 'vue'

export const useAudioUnlock = () => {
  const isAudioUnlocked = ref(false)

  const unlockAudio = () => {
    if (!isAudioUnlocked.value) {
      const audio = new Audio()
      audio.play().catch(() => {}) // Пробуем запустить пустой звук
      isAudioUnlocked.value = true
      document.removeEventListener('click', unlockAudio)
    }
  }

  onMounted(() => {
    document.addEventListener('click', unlockAudio)
  })

  onUnmounted(() => {
    document.removeEventListener('click', unlockAudio)
  })

  return { isAudioUnlocked }
}
