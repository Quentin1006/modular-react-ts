import { observable } from 'mobx'

export default class DashboardStore {
  @observable protected name: string = 'dashboard'

  constructor (service) {
    console.log('service', service)
  }

  getName = () => {
    return this.name
  }
}
