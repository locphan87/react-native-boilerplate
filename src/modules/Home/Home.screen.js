// @flow
import React from 'react'
import { Button } from 'react-native'

import withApp from '../../hoc/withApp/withApp.hoc'

import HomeView from './Home.view'

const navigationOptions = {
  title: 'Home',
  headerRight: (
    <Button title="Done" onPress={() => alert('Done?')} />
  )
}

export default withApp({
  setStatic: ['navigationOptions', navigationOptions]
})(HomeView)
