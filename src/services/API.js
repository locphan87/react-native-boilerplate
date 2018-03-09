import axios from 'axios'
import { HOST } from 'react-native-dotenv'

const supportActions = ['get', 'post', 'patch', 'delete']
// overwrite axios functions
// with a prefix host
const request = supportActions.reduce((acc, action) => {
  acc[action] = (path, ...rest) => {
    const URL = `${HOST}/${path}`
    return axios[action](URL, ...rest)
  }
  return acc
}, {})

export default request
