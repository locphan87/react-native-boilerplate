// @flow
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation'

import Screens from './Navigation.screen'
import {
  stackOptions,
  tabOptions
} from './Navigation.option'

const {
  Home,
  GoalDetails,
  GoalCreation,
  GoalList
} = Screens
const HomeStack = StackNavigator(
  {
    Home,
    GoalDetails
  },
  {
    initialRouteName: 'Home',
    navigationOptions: stackOptions
  }
)

const GoalStack = StackNavigator(
  {
    GoalList,
    GoalCreation,
    GoalDetails
  },
  {
    initialRouteName: 'GoalList',
    navigationOptions: stackOptions
  }
)

const RootStack = TabNavigator(
  {
    Home: { screen: HomeStack },
    Goal: { screen: GoalStack }
  },
  tabOptions
)

export default RootStack
