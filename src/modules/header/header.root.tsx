import React, { FunctionComponent } from 'react'
import { Provider } from 'mobx-react'

import { IModule } from 'Common/typings'

import HeaderLayout from './header.layout'
import HeaderStore from './header.store'
import HeaderService from './header.service'

const HeaderModule: FunctionComponent<IModule> = ({
  baseUrl,
  rootStore,
  session,
}) => {
  const headerStore = new HeaderStore(HeaderService, rootStore)
  rootStore.register('header', headerStore)
  // oauth should get a more suitable name
  // and contain all the info from the authentication
  const { oauth } = session
  return (
    <Provider store={headerStore}>
      {/* authInfos should get a better name or get spreaded */}
      <HeaderLayout baseUrl={baseUrl} authInfos={oauth} />
    </Provider>
  )
}

export default HeaderModule
