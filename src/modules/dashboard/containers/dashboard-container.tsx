import React, { Component } from 'react'
import { inject } from 'mobx-react'

// import DashboardStore from '../dashboard.store'

import Dashboard from '../components/dashboard'

class DashboardContainer extends Component<{}, {}> {
  render () {
    return (
      <Dashboard/>
    )
  }
}

export default inject((allStores: any) => {
  return null
})(DashboardContainer)
