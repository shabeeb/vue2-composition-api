import { ref } from '@vue/composition-api'

export function useToggle () {
  const isVisible = ref(true)

  const toggleVisibility = () => {
    isVisible.value = !isVisible.value
  }

  return {
    isVisible,
    toggleVisibility
  }
}
