// @flow
import { StackNavigator } from 'react-navigation'

import Screens from '../Navigation.screen'
import { stackOptions } from '../Navigation.option'

const { Home, GoalDetails } = Screens
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

export default HomeStack
