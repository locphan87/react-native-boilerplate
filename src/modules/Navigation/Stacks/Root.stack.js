// @flow
import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import { Text } from '../../../components/Styled'
import { tabOptions } from '../Navigation.option'
import { Routes } from '../Navigation.constant'
import I18n from '../../../i18n'

import HomeStack from './Home.stack'
import AppInfoStack from './AppInfo.stack.js'

const { Root } = Routes
const renderTab = i18nKey => (
  <View style={{ paddingVertical: 8 }}>
    <Text>{I18n.t(i18nKey)}</Text>
  </View>
)
const RootStack = createBottomTabNavigator(
  {
    [Root.Home]: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: () => renderTab('home.screen.title')
      }
    },
    [Root.AppInfo]: {
      screen: AppInfoStack,
      navigationOptions: {
        tabBarLabel: () => renderTab('appInfo.screen.title')
      }
    }
  },
  tabOptions
)

export default RootStack
