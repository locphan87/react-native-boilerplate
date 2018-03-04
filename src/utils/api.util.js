import axios from 'axios'

const HOST = 'http://localhost:3000'

// overwrite axios functions
// with a prefix host
const fns = Object.keys(axios).reduce((acc, fn) => {
  acc[fn] = (path, ...rest) => {
    const URL = `${HOST}/${path}`
    return axios[fn](URL, ...rest)
  }
  return acc
}, {})

export default fns
