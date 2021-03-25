import { observable } from 'mobx'
import { IRootStore } from 'Common/typings'

export default class HeaderStore {
  @observable protected name: string = 'header'
  protected service: any
  protected rootStore: IRootStore

  constructor(service, rootStore) {
    this.service = service
    this.rootStore = rootStore
    console.log('service', service)
  }

  getName = () => {
    return this.name
  }
}
