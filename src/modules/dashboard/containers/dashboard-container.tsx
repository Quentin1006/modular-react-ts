import React, { Component } from 'react'
import { inject } from 'mobx-react'

// import DashboardStore from '../dashboard.store'

import Dashboard from '../components/dashboard'
import SubHeaderBase from '~/components/sub-header/sub-header'

class Line {
  public id: string
  public phoneNumber: string
  public username: string
  constructor ({ phoneNumber, username }) {
    this.id = phoneNumber
    this.phoneNumber = phoneNumber
    this.username = username
  }
}
const lines = [
  {
    username: 'Quentin',
    phoneNumber: '0651101992',
  },
  {
    username: 'Quentin',
    phoneNumber: '0651525354',
  },
].map(line => new Line(line))

const selectedLineId: string = lines[0].phoneNumber

class DashboardContainer extends Component {
  render () {
    return (
      <>
        <SubHeaderBase
          canSwitchLine={false}
          lines={lines}
          onSwitchLine={(id) => console.log('switching line for', id)}
          selectedLineId={selectedLineId}
        />
        <Dashboard/>
      </>
    )
  }
}

export default inject((allStores: any) => {
  return null
})(DashboardContainer)
