// @flow
import React from 'react'
import { Provider } from 'react-redux'

import Navigator from './src/modules/Navigation/Navigation'
import createStore from './src/redux/createStore'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

export default App
