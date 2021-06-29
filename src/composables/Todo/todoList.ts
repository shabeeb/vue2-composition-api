import { ref, computed, onMounted, watchEffect, watch } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'
import { useToggle } from '@/composables/Todo/useToggle'

const todoModule = createNamespacedHelpers('todo') // specific module name
const { useState, useActions } = todoModule

export function todoList () {
  // const store = useStore()

  const { todos: todosList } = useState(['todos'])

  const { onFetchTodos, onDeleteTodo, onUpdateTodo } = useActions(['onFetchTodos', 'onDeleteTodo', 'onUpdateTodo'])

  // todos
  const todos = computed(() => todosList.value)
  onMounted(() => {
    // root.$store.dispatch('todo/onFetchTodos')
    onFetchTodos()
  })

  const deleteTodo = id => {
    onDeleteTodo(id)
  }
  watchEffect(() => console.log('watchEffect', todosList))
  //   watch(todosList, (todosList, prevCount) => {
  //     console.log('todosList', todosList)
  //     console.log('prevCount', prevCount)
  //   })

  const updateTodo = todo => {
    const updatedTodo = {
      title: todo.title,
      id: todo.id,
      completed: !todo.completed
    }
    console.log('updatedTodo', updatedTodo)
    onUpdateTodo(updatedTodo)
  }

  // visibility
  const { isVisible, toggleVisibility } = useToggle()

  return {
    todos,
    isVisible,
    toggleVisibility,
    deleteTodo,
    updateTodo
  }
}
