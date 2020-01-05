import { observable } from 'mobx'

export default class DashboardStore {
  @observable protected name: string = 'header'

  constructor (service) {
    console.log('service', service)
  }

  getName = () => {
    return this.name
  }
}
