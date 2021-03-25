import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HeaderContainer from './containers/header-container'

import { memorizeBaseUrl } from 'Utils'

type HeaderLayout = {
  authInfos?: object
  baseUrl?: string
}

const HeaderLayout: FunctionComponent<HeaderLayout> = ({
  authInfos,
  baseUrl = '',
}) => {
  const withBaseUrl = memorizeBaseUrl(baseUrl)
  return (
    <Router>
      <Switch>
        <Route exact path={withBaseUrl('/')}>
          <HeaderContainer />
        </Route>
      </Switch>
    </Router>
  )
}

export default HeaderLayout
