<template>
  <div>
    <form>
      <input type="text" v-model="title" placeholder="Add to do ..." />
      <input v-on:click="addNewTodo" type="submit" value="Add" />
    </form>
    <br />
  </div>
</template>

<script>
// import { ref } from '@vue/composition-api'
import { addTodo } from '@/composables/Todo/addTodo'
import { Component, Vue } from 'vue-property-decorator'
// import store from '@/store/todo'
  @Component({
    setup () {
      return { ...addTodo() }
    }
  })
export default class addTodos extends Vue {

  // export default {
  //   name: 'AddTodo',
  //   setup (_, { root }) {
  //     // const store = useStore()

  //     // console.log('root.$store', root.$store)
  //     // const title = ref('')
  //     // const addNewTodo = e => {
  //     //   e.preventDefault()
  //     //   root.$store.dispatch('todo/onAddTodo', {
  //     //     title: title.value
  //     //   })
  //     //   title.value = ''
  //     // }

//     return { ...addTodo() }
//   }
// }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
