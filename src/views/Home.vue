<template>
  <div id="app">
     <v-container fluid   class="grey lighten-5 mb-6">
      <v-row dense>
        <v-col>
          <v-card
            outlined
            tile
            md="3"
            class="mx-2 pa-3"
            max-width="500"
          >
          <v-card-title > Js code</v-card-title>
          <v-card-text>
              <AddTodo />
              <FilterTodos />
              <TodosJS />
          </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            outlined
            tile
            md="3"
            class="mx-2 pa-3"
            max-width="500"
          >
          <v-card-title > Ts code</v-card-title>
          <v-card-text>
              <AddTodo />
              <FilterTodos />
              <TodosTS />
          </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            outlined
            tile
            md="3"
            class="mx-2 pa-3"
            max-width="500"
          >
          <v-card-title > Ts class code</v-card-title>
          <v-card-text>
              <AddTodo />
              <FilterTodos />
              <TodosTSClass />
          </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AddTodo from '@/components/Todo/TSClass/AddTodo.vue'
import TodosJS from '@/components/Todo/JS/TodosJs.vue'
import TodosTS from '@/components/Todo/TS/TodosTs.vue'
import TodosTSClass from '@/components/Todo/TSClass/TodosTsClass.vue'

import FilterTodos from '@/components/Todo/JS/FilterTodos.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    AddTodo,
    TodosJS,
    FilterTodos,
    TodosTS,
    TodosTSClass
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
