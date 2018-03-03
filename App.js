import React from 'react'
import { Provider } from 'react-redux'

import Navigator from './src/modules/Navigation/Navigation'
import createStore from './src/redux/createStore'
import { configure } from './src/utils/sentry.utils'

const store = createStore()
const DSN = 'https://5d542a5753a3481b871a234942cea4ee@sentry.io/275323'

configure(DSN)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App
