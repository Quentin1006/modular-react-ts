import React, { FunctionComponent } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TodoListContainer from './containers/todo-list-container'

import { memorizeBaseUrl } from '../../utils'

type TodoAppLayout = {
  authInfos?: object,
  baseUrl?: string
}

const TodoAppLayout: FunctionComponent<TodoAppLayout> = ({ authInfos, baseUrl = '' }) => {
  const withBaseUrl = memorizeBaseUrl(baseUrl)
  return (
    <Router>
      <Switch>
        <Route exact path={withBaseUrl('/')}>
          <TodoListContainer/>
        </Route>
        <Route exact path={withBaseUrl('/list')}>
          <div>Hello list</div>
        </Route>
        <Route exact path={withBaseUrl('/list/:id')}>
          <div>Hello List with Id</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default TodoAppLayout
