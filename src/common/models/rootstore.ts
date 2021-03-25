import { IRootStore } from 'Common/typings'

class RootStore implements IRootStore {
  protected domainStores: Record<string, any> = {}

  register(name: string, store: any): void {
    this.domainStores[name] = store
  }

  unregister(name: string): void {
    delete this.domainStores[name]
  }
}

export default RootStore
