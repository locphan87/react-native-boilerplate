// @flow
import type { NavigationState, NavigationScreenProp } from 'react-navigation'
import { path } from 'ramda'

const getNavState = (
  paramName: string,
  navigation: NavigationScreenProp<NavigationState>
) => path(['state', 'params', paramName], navigation)

export { getNavState }
