import React, { FunctionComponent } from 'react'
import TodoItem from './todo'
import { TodoInterface } from '../models/todo'

type TodoList = {
  todos: Array<TodoInterface>
}

const TodoList: FunctionComponent<TodoList> = ({ todos }) => {
  return (
    <>
      <h1>TODO List</h1>
      {todos.map(todo => (
        <TodoItem {...todo} key={todo.id}/>
      ))}
    </>
  )
}

export default TodoList
