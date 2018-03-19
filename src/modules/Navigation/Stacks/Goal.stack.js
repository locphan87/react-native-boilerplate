// @flow
import { StackNavigator } from 'react-navigation'

import Screens from '../Navigation.screen'
import { stackOptions } from '../Navigation.option'
import { Routes } from '../Navigation.constant'

const { Goal } = Routes
const { GoalList, GoalCreation, GoalDetails } = Screens
const GoalStack = StackNavigator(
  {
    [Goal.GoalList]: GoalList,
    [Goal.GoalCreation]: GoalCreation,
    [Goal.GoalDetails]: GoalDetails
  },
  {
    initialRouteName: Goal.GoalList,
    navigationOptions: stackOptions
  }
)

export default GoalStack
