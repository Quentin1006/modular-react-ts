import { observable, computed, action } from 'mobx'

export enum TodoState { NOT_STARTED, DOING, DONE }
enum TodoStatus { ON_TIME, EXPIRED }

export interface TodoInterface {
  // @observables
  id: number
  title: string
  createdBy: string
  createdAt: number
  deadline: number
  description: string
  chores: Array<string>
  state: TodoState
  // @computed
  status: TodoStatus
  extract: string
  // @actions
  markAsNotStarted(): void
  markAsDoing(): void
  markAsDone(): void
}

export default class Todo implements TodoInterface {
  @observable chores: Array<string>
  @observable createdAt: number
  @observable createdBy: string
  @observable description: string
  @observable deadline: number
  @observable id: number
  @observable state: TodoState
  @observable title: string

  static allStates: Array<string> = Object.keys(TodoState).filter(k =>
    typeof TodoState[k as any] === 'number'
  )

  constructor ({ chores, createdBy, description, deadline, title }) {
    const createdDate = Date.now()
    this.chores = chores
    this.createdAt = createdDate
    this.createdBy = createdBy
    this.description = description
    this.deadline = deadline
    this.id = createdDate
    this.state = TodoState.NOT_STARTED
    this.title = title
  }

  @computed get status () {
    return this.deadline - Date.now() > 0 ? TodoStatus.ON_TIME : TodoStatus.EXPIRED
  }

  @computed get extract () {
    const EXTRACT_LEN = 70
    const descrLen = this.description.length
    return descrLen > EXTRACT_LEN
      ? this.description.substr(0, EXTRACT_LEN)
      : this.description
  }

  @action public markAsNotStarted = () => {
    this.state = TodoState.NOT_STARTED
  }

  @action public markAsDone = () => {
    this.state = TodoState.DONE
  }

  @action public markAsDoing = () => {
    this.state = TodoState.DOING
  }
}
