// @flow
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import { isDEV } from '../utils/platform.util'

import reducer from './reducer'

const middleware = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
  })
]
const enhancers = [applyMiddleware(...middleware)]

export default (initialValue: Object = {}) => {
  const getComposer = () => {
    if (!isDEV()) return compose
    return typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  }
  const composer = getComposer()

  return createStore(
    reducer,
    initialValue,
    composer(...enhancers)
  )
}
