import Vuex, { StoreOptions } from 'vuex'
// import { RootState } from './types'
import Vue from 'vue'

// const debug = process.env.NODE_ENV !== 'production'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

// Vue.use(Vuex)
const sample = [
  {
    userId: 1,
    id: 1,
    title: 'test data one',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'test 2',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'test 3',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'test 4',
    completed: true
  }]

@Module({ namespaced: true })
export default class TodoModule extends VuexModule {
  todos: any = sample

  @Mutation
  public setTodo (todo) {
    this.todos = todo
  }

  @Mutation
  public addTodo (todo) {
    this.todos = [...this.todos, todo]
  }

  @Mutation
  public deleteTodo (id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  @Mutation
  public updateTodo (updatedTodo) {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id)
    console.log('index', index)
    // if (index)
    this.todos.splice(index, 1, updatedTodo)
  }

  @Action({ commit: 'setTodo', rawError: true })
  public async onFetchTodos () {
    // const response = await Axios.get(
    //   'https://jsonplaceholder.typicode.com/todos'
    // )
    // return response.data
    return sample
    // commit(ACTION_TYPES.fetchTodos, response.data)
  }

  @Action({ commit: 'addTodo', rawError: true })
  public async onAddTodo (title, context) {
    return { userId: 1, id: (this.context.state as any).todos.length + 1, title, completed: false }
  }

  @Action({ commit: 'deleteTodo', rawError: true })
  public async onDeleteTodo (id) {
    return id
    // commit(ACTION_TYPES.fetchTodos, response.data)
  }

  @Action({ commit: 'updateTodo', rawError: true })
  public async onUpdateTodo (todo) {
    // const response = await Axios.get(
    //   'https://jsonplaceholder.typicode.com/todos'
    // )
    return todo
    // commit(ACTION_TYPES.fetchTodos, response.data)
  }
}
