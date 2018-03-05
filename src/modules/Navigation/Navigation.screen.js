// @flow
import React from 'react'
import { Button } from 'react-native'
import type { NavigationScreenConfigProps } from 'react-navigation'

import Home from '../Home/Home.screen'
import GoalCreation from '../GoalCreation/GoalCreation.screen'
import GoalDetails from '../GoalDetails/GoalDetails.screen'
import GoalList from '../GoalList/GoalList.screen'

const Screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerRight: (
        <Button
          title="Done"
          onPress={() => alert('Done?')}
        />
      )
    }
  },
  GoalCreation: {
    screen: GoalCreation,
    navigationOptions: {
      title: 'Goal Creation'
    }
  },
  GoalDetails: {
    screen: GoalDetails,
    navigationOptions: {
      title: 'Goal Details'
    }
  },
  GoalList: {
    screen: GoalList,
    navigationOptions: ({
      navigation
    }: NavigationScreenConfigProps) => ({
      title: 'Goal List',
      headerRight: (
        <Button
          title={'New goal'}
          onPress={() => {
            navigation.navigate('GoalCreation')
          }}
        />
      )
    })
  }
}

export default Screens
