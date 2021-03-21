import React, { Component } from 'react'
import { inject } from 'mobx-react'

import Header from '../components/header'

class HeaderContainer extends Component<{}, {}> {
  render() {
    return <Header />
  }
}

export default inject((allStores: any) => {
  return null
})(HeaderContainer)
