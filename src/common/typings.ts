export interface IRootStore {
  register: (name: string, store: any) => void
}

export interface ILogger {
  log: (level: string, msg: any) => void
  error: (msg: any) => void
  warn: (msg: any) => void
  info: (msg: any) => void
}

export interface IRestClient {
  get: (url: string) => any
  post: (url: string, body: any) => any
}

export interface IModule {
  baseUrl?: string
  config?: any
  restClient: IRestClient
  rootStore: IRootStore
  session?: any
  logger?: ILogger
}
