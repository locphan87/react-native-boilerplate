import axios from 'axios'
import { HOST } from 'env-config'

const request = axios.create({
  baseURL: HOST,
  timeout: 30000 // 30s
})

export default request
