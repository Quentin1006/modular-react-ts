import { observable } from 'mobx'

import Todo, { TodoInterface } from './models/todo'

export default class TodoAppStore {
  @observable protected todos : Array<TodoInterface> = []

  constructor (service, initialTodos: Array<object> = []) {
    this.mapTodos(initialTodos)
  }

  getTodos = () => {
    return this.todos
  }

  mapTodos (todos: any) {
    this.todos = todos.map((t:any) => new Todo(t))
  }
}
