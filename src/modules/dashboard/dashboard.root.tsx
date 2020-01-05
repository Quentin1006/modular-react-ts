import React, { FunctionComponent, useState } from 'react'
import { Provider } from 'mobx-react'

import DashboardLayout from './dashboard.layout'
import DashboardStore from './dashboard.store'
import DashboardService from './dashboard.service'

import RootStore from '../../models/rootstore'

type Dashboard = {
  authInfos?: object, // might contains authToken, referer, method to refresh token...
  baseUrl?: string,
  rootStore?: RootStore
}

const DashboardModule: FunctionComponent<Dashboard> = ({ authInfos, baseUrl }) => {
  const [ store ] = useState(new DashboardStore(DashboardService))
  return (
    <Provider store={store}>
      <DashboardLayout baseUrl={baseUrl} authInfos={authInfos} />
    </Provider>
  )
}

export default DashboardModule
