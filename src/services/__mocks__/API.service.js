import { identity } from 'ramda'

const update = method => (path, payload) => ({ path, payload, method })

export default {
  get: identity,
  post: update('post'),
  delete: update('delete'),
  patch: update('patch')
}
