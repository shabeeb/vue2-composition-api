import { ref, computed, onMounted, defineComponent } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'
// import { useToggle } from '@/composables/Todo/useToggle'

const todoModule = createNamespacedHelpers('todo') // specific module name
const { useState, useActions } = todoModule

export function addTodo () {
  const title = ref('')
  const { onAddTodo } = useActions(['onAddTodo'])

  const addNewTodo = e => {
    e.preventDefault()
    onAddTodo(title.value)
    title.value = ''
  }

  return {
    title,
    addNewTodo
  }
}
