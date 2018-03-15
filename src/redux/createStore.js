// @flow
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { is } from 'ramda'

import { isDEV } from '../utils/platform.util'

import reducer from './reducer'

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
  const {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: reduxDevToolsCompose
  } = window
  return reduxDevToolsCompose || compose
}
const composer = getComposer()

export default (initialValue: Object = {}) =>
  createStore(reducer, initialValue, composer(...enhancers))
