import React, { FunctionComponent } from 'react'
import { Provider } from 'mobx-react'

import TodoAppLayout from './todo-app.layout'
import TodoAppStore from './todo-app.store'
import todoAppService from './todo-app.service'

import RootStore from 'Common/models/rootstore'

import initialTodos from './tests/todos.sample'

type TodoApp = {
  authInfos?: object // might contains authToken, referer, method to refresh token...
  baseUrl?: string
  rootStore?: RootStore
}

const TodoAppModule: FunctionComponent<TodoApp> = ({ authInfos, baseUrl }) => {
  // const store = rootStore.addStore({
  //   name:'todoApp',
  //   service: todoAppService,
  // }, TodoAppStore)

  const store = new TodoAppStore(todoAppService, initialTodos)
  return (
    <Provider store={store}>
      <TodoAppLayout baseUrl={baseUrl} authInfos={authInfos} />
    </Provider>
  )
}

export default TodoAppModule
