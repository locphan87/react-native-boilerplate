// @flow
import { TabNavigator } from 'react-navigation'

import { tabOptions } from '../Navigation.option'

import HomeStack from './Home.stack'
import GoalStack from './Goal.stack'

const RootStack = TabNavigator(
  {
    Home: { screen: HomeStack },
    Goal: { screen: GoalStack }
  },
  tabOptions
)

export default RootStack
