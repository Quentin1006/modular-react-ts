import React, { FunctionComponent, useState, useEffect } from 'react'

import { CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HeaderModule from './modules/header/header.root'
import RootStore from 'Common/models/rootstore'

require('./app.scss')

const TodoAppModule = React.lazy(
  () => import('./modules/todo-app/todo-app.root'),
)
const DashboardModule = React.lazy(
  () => import('./modules/dashboard/dashboard.root'),
)

const App: FunctionComponent = () => {
  const [isNotifsOpen, setNotifsOpen] = useState(false)
  const rootStore = new RootStore()

  useEffect(() => {
    const toggleNotifsOpen = () => {
      setNotifsOpen(!isNotifsOpen)
    }
    globalThis.addEventListener('Toggle_Notifications', () => {
      toggleNotifsOpen()
    })
    return globalThis.removeEventListener('Toggle_Notifications', () => {
      toggleNotifsOpen()
    })
  })

  return (
    <Router>
      <div className="header">
        <Route path="/">
          <HeaderModule rootStore={rootStore} />
        </Route>
      </div>
      <div className={`main ${isNotifsOpen ? 'notifs-open' : ''}`}>
        <main className="module">
          <Switch>
            <React.Suspense fallback={<CircularProgress />}>
              <Route path={'/todoapp'}>
                <TodoAppModule baseUrl="/todoapp" />
              </Route>
              <Route path={'/'}>
                <DashboardModule baseUrl="/" />
              </Route>
            </React.Suspense>
          </Switch>
        </main>
        <aside className="notifs">
          {/* notification module, should contain a listener for toggle panel */}
        </aside>
      </div>
    </Router>
  )
}

export default App
