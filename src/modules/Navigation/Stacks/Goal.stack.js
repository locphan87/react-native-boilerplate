// @flow
import { StackNavigator } from 'react-navigation'

import Screens from '../Navigation.screen'
import { stackOptions } from '../Navigation.option'

const { GoalList, GoalCreation, GoalDetails } = Screens
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

export default GoalStack
