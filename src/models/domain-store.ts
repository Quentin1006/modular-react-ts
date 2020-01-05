import RootStore from './rootstore'

class DomainStore {
  protected rootStore: RootStore
  protected service: object
  protected config: object

  constructor (rootStore: RootStore, service: object, config: object) {
    this.rootStore = rootStore
    this.service = service
    this.config = config
  }
}

export default DomainStore