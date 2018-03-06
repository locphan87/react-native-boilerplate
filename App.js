// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous-native'

import Navigator from './src/modules/Navigation/Navigation'
import createStore from './src/redux/createStore'
import theme from './src/themes/theme'

const store = createStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  </Provider>
)

export default App
