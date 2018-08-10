import storage from 'redux-persist/lib/storage'
import { ENV } from 'env-config'

const key = `root-${ENV}`
const persistConfig = {
  key,
  storage,
  blacklist: []
}

export default persistConfig
