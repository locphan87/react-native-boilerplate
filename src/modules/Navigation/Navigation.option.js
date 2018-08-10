// @flow
import React from 'react'
import type { NavigationScreenConfigProps } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import { COLORS } from '../../themes'
import { match } from '../../utils/common.util'

import { Routes } from './Navigation.constant'

const { Root } = Routes
const stackOptions = {
  headerStyle: {
    backgroundColor: '#292D36'
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {}
}
const tabOptions = {
  navigationOptions: ({ navigation }: NavigationScreenConfigProps) => ({
    tabBarIcon: ({ focused, tintColor }: Object) => {
      const { routeName } = navigation.state
      const outline = focused ? '' : '-outline'
      const iconName = match(routeName)({
        [Root.Home]: `ios-home${outline}`,
        [Root.Goal]: `ios-list-box${outline}`
      })

      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarOptions: {
    labelStyle: {
      fontSize: 14
    },
    style: {
      paddingTop: 8,
      backgroundColor: COLORS.base,
      borderTopWidth: 1,
      borderTopColor: COLORS.gray,
      height: 62
    }
  },
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false
}

export { stackOptions, tabOptions }
