// FIXME flow issues
import axios from 'axios'
import { HOST } from 'react-native-dotenv'
import Immutable from 'seamless-immutable'

const supportActions = Immutable([
  'get',
  'post',
  'patch',
  'delete'
])
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
