<template>
  <div>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div>
      <button class="hide" @click="toggleVisibility">Hide Todos</button>
    </div>
    <!-- todos:{{todos}} -->

    <div v-if="isVisible" class="todos">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="todo"
        @dblclick="updateTodo(todo)"
        v-bind:class="{ 'is-complete': todo.completed }"
      >

        <p>{{ todo.title }}</p>
        <i v-on:click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
// import store from '@/store/todo'
import { Component, Vue } from 'vue-property-decorator'

import { defineComponent } from '@vue/composition-api'
// import { useToggle } from '@/composables/Todo/useToggle'
// import { createNamespacedHelpers } from 'vuex-composition-helpers'
import { todoList } from '@/composables/Todo/todoList'

// const todoModule = createNamespacedHelpers('todo') // specific module name
// const { useState, useActions } = todoModule

// export default defineComponent({
  @Component({
  setup () {
    return { ...todoList() }
  }
  })
export default class Todos extends Vue {
  // name: 'Todos',
  setup () {
    // // const store = useStore()
    // const { todos: todosList } = useState(['todos'])
    // console.log('useState([])s', useState(['todos']))
    // console.log('todosList', todosList)

    // const { onFetchTodos, onDeleteTodo, onUpdateTodo } = useActions(['onFetchTodos', 'onDeleteTodo', 'onUpdateTodo'])

    // // todos
    // const todos = computed(() => todosList.value)
    // onMounted(() => {
    //   // root.$store.dispatch('todo/onFetchTodos')
    //   onFetchTodos()
    // })

    // const deleteTodo = id => {
    //   onDeleteTodo(id)
    // }

    // const updateTodo = todo => {
    //   const updatedTodo = {
    //     title: todo.title,
    //     id: todo.id,
    //     completed: !todo.completed
    //   }
    //   console.log('updatedTodo', updatedTodo)
    //   onUpdateTodo(updatedTodo)
    // }

    // // visibility
    // const { isVisible, toggleVisibility } = useToggle()

    // return {
    //   todos,
    //   isVisible,
    //   toggleVisibility,
    //   deleteTodo,
    //   updateTodo
    // }
    return { ...todoList() }
  }
// }
// })
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
.hide {
  background: #a7b597;
  color: #fff;
  border: 1px #a7b597 solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
