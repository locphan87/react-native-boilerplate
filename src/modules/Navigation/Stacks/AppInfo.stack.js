// @flow
import { createStackNavigator } from 'react-navigation'

import { Routes } from '../Navigation.constant'
import Screens from '../Navigation.screen'
import { stackOptions } from '../Navigation.option'

const { AppInfo } = Screens
const HomeStack = createStackNavigator(
  {
    [Routes.AppInfo.AppInfo]: AppInfo
  },
  {
    initialRouteName: Routes.AppInfo.AppInfo,
    navigationOptions: stackOptions
  }
)

export default HomeStack
