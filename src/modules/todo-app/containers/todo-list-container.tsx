import React, { Component } from 'react'
import { inject } from 'mobx-react'

import TodoAppStore from '../todo-app.store'

import TodoList from '../components/todo-list'

class TodoListContainer extends Component<{ todos?: any }, {}> {
  render () {
    const { todos } = this.props
    return (
      <TodoList todos={todos}/>
    )
  }
}

export default inject((allStores: any) => {
  const todoAppStore: TodoAppStore = allStores.store
  return {
    todos: todoAppStore.getTodos() || [],
  }
})(TodoListContainer)
