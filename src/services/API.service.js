// FIXME flow issues
import axios from 'axios'
import Immutable from 'seamless-immutable'
import { HOST } from 'env-config'

const supportActions = Immutable(['get', 'post', 'patch', 'delete'])
// overwrite axios functions
// with predefined configs
const request = supportActions.reduce((acc, action) => {
  acc[action] = (path, ...rest) => {
    const URL = `${HOST}/${path}`

    return axios[action](URL, ...rest)
  }
  return acc
}, {})

export default request
