import React, { FunctionComponent } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import DashboardContainer from './containers/dashboard-container'

import { memorizeBaseUrl } from '../../utils'

type DashboardLayout = {
  authInfos?: object,
  baseUrl?: string
}

const DashboardLayout: FunctionComponent<DashboardLayout> = ({ authInfos, baseUrl = '' }) => {
  const withBaseUrl = memorizeBaseUrl(baseUrl)
  return (
    <Router>
      <Switch>
        <Route exact path={withBaseUrl('/')}>
          <DashboardContainer/>
        </Route>
      </Switch>
    </Router>
  )
}

export default DashboardLayout
