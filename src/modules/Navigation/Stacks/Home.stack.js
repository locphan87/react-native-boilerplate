// @flow
import { StackNavigator } from 'react-navigation'

import { Routes } from '../Navigation.constant'
import Screens from '../Navigation.screen'
import { stackOptions } from '../Navigation.option'

const { Home: HomeRoutes } = Routes
const { Home, GoalDetails } = Screens
const HomeStack = StackNavigator(
  {
    [HomeRoutes.Home]: Home,
    [HomeRoutes.GoalDetails]: GoalDetails
  },
  {
    initialRouteName: HomeRoutes.Home,
    navigationOptions: stackOptions
  }
)

export default HomeStack
