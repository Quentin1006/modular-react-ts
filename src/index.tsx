import 'regenerator-runtime'
import 'core-js/stable'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

ReactDOM.render(<App />, document.querySelector('#root') as HTMLElement)
