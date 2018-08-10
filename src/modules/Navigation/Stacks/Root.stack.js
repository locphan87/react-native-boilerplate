// @flow
import { createBottomTabNavigator } from 'react-navigation'

import { tabOptions } from '../Navigation.option'
import { Routes } from '../Navigation.constant'
import I18n from '../../../i18n'

import HomeStack from './Home.stack'
import GoalStack from './Goal.stack'

const { Root } = Routes
const RootStack = createBottomTabNavigator(
  {
    [Root.Home]: {
      screen: HomeStack,
      navigationOptions: {
        title: I18n.t('home.screen.title')
      }
    },
    [Root.Goal]: {
      screen: GoalStack,
      navigationOptions: {
        title: I18n.t('goalList.screen.title')
      }
    }
  },
  tabOptions
)

export default RootStack
