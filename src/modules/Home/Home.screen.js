// @flow
import React from 'react'
import { Button } from 'react-native'
import { compose, setStatic } from 'recompose'

import HomeView from './Home.view'

const navigationOptions = {
  title: 'Home',
  headerRight: (
    <Button title="Done" onPress={() => alert('Done?')} />
  )
}

export default compose(
  setStatic('navigationOptions', navigationOptions)
)(HomeView)
