import React, { FunctionComponent, useState, useEffect } from 'react'

import {
  CircularProgress,
} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './app.scss'

import HeaderModule from './modules/header/header.root'
const TodoAppModule = React.lazy(() => import('./modules/todo-app/todo-app.root'))
const DashboardModule = React.lazy(() => import('./modules/dashboard/dashboard.root'))

const App: FunctionComponent = () => {
  const [ isNotifsOpen, setNotifsOpen ] = useState(false)

  useEffect(() => {
    const toggleNotifsOpen = () => {
      setNotifsOpen(!isNotifsOpen)
    }
    window.addEventListener('toggle notifs', (ev) => {
      toggleNotifsOpen()
    })
    return (
      window.removeEventListener('toggle notifs', (ev) => {
        toggleNotifsOpen()
      })
    )
  })

  return (
    <Router>
      <div className='header'>
        <Route path='/'>
          <HeaderModule/>
        </Route>
      </div>
      <div className={`main ${isNotifsOpen ? 'notifs-open' : ''}`}>
        <main className='module'>
          <Switch>
            <React.Suspense fallback={<CircularProgress/>}>
              <Route path={'/todoapp'}>
                <TodoAppModule baseUrl='/todoapp'/>
              </Route>
              <Route path={'/'}>
                <DashboardModule baseUrl='/'/>
              </Route>
            </React.Suspense>
          </Switch>
        </main>
        <aside className='notifs'>
          {/* notification module, should contain a listener for toggle panel */}
        </aside>
      </div>
    </Router>
  )
}

export default App
