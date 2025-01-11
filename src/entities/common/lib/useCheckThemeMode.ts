import { ref } from 'vue'

export const useSwitchTheme = () => {
  const isToggled = ref(false)
  const themeMode = useCookie('themeMode')

  const useUpdateThemeMode = () => {
    watch(isToggled, (newValue) => {
      if (newValue) {
        document.body.classList.add('dark')
        themeMode.value = 'dark'
      } else {
        document.body.classList.remove('dark')
        themeMode.value = 'light'
      }
    })
  }

  const useCheckThemeMode = () => {
    onMounted(() => {
      const themeMode = useCookie('themeMode')
      if (themeMode.value === 'dark') {
        isToggled.value = true
        document.body.classList.add('dark')
      }
    })
  }

  return { isToggled, themeMode, useUpdateThemeMode, useCheckThemeMode }
}
