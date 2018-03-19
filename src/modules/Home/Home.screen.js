// @flow
import { compose, setStatic } from 'recompose'

import I18n from '../../i18n'

import HomeView from './Home.view'

const navigationOptions = {
  title: I18n.t('home.screen.title')
}

export default compose(
  setStatic('navigationOptions', navigationOptions)
)(HomeView)
