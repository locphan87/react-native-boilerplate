// @flow
import React from 'react'
import { Button } from 'react-native'
import { compose, setStatic } from 'recompose'

import I18n from '../../i18n'
import Constants from '../../constants'

import HomeView from './Home.view'

const navigationOptions = {
  title: 'Home',
  headerRight: (
    <Button
      title={I18n.t('home.screen.done')}
      onPress={Constants.NOOP}
    />
  )
}

export default compose(
  setStatic('navigationOptions', navigationOptions)
)(HomeView)
