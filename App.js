import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous-native'

import Navigator from './src/modules/Navigation'
import createStore from './src/redux/createStore'
import theme from './src/themes/theme'

import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = createStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </ThemeProvider>
  </Provider>
)

export default App
