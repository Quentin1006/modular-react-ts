import { StoreInfos } from './store-interfaces'

class RootStore {
  addStore (storeInfos: StoreInfos, Store: any) {
    const { name, service, config } = storeInfos
    if (!this[name]) {
      this[name] = new Store(this, service, config)
    }
    return this[name]
  }
}

export default RootStore
