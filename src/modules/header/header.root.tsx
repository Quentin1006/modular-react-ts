import React, { FunctionComponent, useState } from 'react'
import { Provider } from 'mobx-react'

import HeaderLayout from './header.layout'
import HeaderStore from './header.store'
import HeaderService from './header.service'

import RootStore from '../../models/rootstore'

type Header = {
  authInfos?: object, // might contains authToken, referer, method to refresh token...
  baseUrl?: string,
  rootStore?: RootStore
}

const HeaderModule: FunctionComponent<Header> = ({ authInfos, baseUrl }) => {
  const [ store ] = useState(new HeaderStore(HeaderService))
  return (
    <Provider store={store}>
      <HeaderLayout baseUrl={baseUrl} authInfos={authInfos} />
    </Provider>
  )
}

export default HeaderModule
