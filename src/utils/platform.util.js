// @flow
import { Platform } from 'react-native'
import { equals } from 'ramda'

const isDEV = () => equals(process.env.NODE_ENV, 'development')
const isIOS = () => equals(Platform.OS, 'ios')
const isAndroid = () => equals(Platform.OS, 'android')

export { isDEV, isIOS, isAndroid }
