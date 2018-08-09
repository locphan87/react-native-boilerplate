import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { persistStore, persistReducer } from 'redux-persist'
import { is } from 'ramda'

import { isDEV } from '../utils/platform.util'
import { persistConfig } from '../configs'

import rootReducer from './reducer'

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
  })
]
const enhancers = [applyMiddleware(...middleware)]
const getComposer = () => {
  if (!isDEV()) return compose
  if (!is(Object, window)) return compose
  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: reduxDevToolsCompose } = window

  return reduxDevToolsCompose || compose
}
const composer = getComposer()

export default (initialValue = {}) => {
  const store = createStore(
    persistedReducer,
    initialValue,
    composer(...enhancers)
  )
  const persistor = persistStore(store)

  return { store, persistor }
}
