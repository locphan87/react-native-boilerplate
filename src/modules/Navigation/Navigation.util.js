// @flow
import type {
  NavigationState,
  NavigationScreenProp
} from 'react-navigation'
import { path, isNil } from 'ramda'

const getNavState = (
  paramName: string,
  navigation: NavigationScreenProp<NavigationState>
) => {
  const value = path(
    ['state', 'params', paramName],
    navigation
  )
  if (isNil(value))
    throw new Error(
      `Navigation param ${paramName} is missing`
    )
  return value
}

export { getNavState }
