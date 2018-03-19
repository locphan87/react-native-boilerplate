// @flow
import { TabNavigator } from 'react-navigation'

import { tabOptions } from '../Navigation.option'
import { Routes } from '../Navigation.constant'

import HomeStack from './Home.stack'
import GoalStack from './Goal.stack'

const { Root } = Routes
const RootStack = TabNavigator(
  {
    [Root.Home]: { screen: HomeStack },
    [Root.Goal]: { screen: GoalStack }
  },
  tabOptions
)

export default RootStack
