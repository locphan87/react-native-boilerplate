// @flow
import { compose, setStatic, withHandlers } from 'recompose'

import I18n from '../../i18n'
import { withApp } from '../../hoc'
import { getNavState } from '../Navigation/Navigation.util'

import HomeView from './Home.view'

const navigationOptions = ({ navigation }) => ({
  headerTitle:
    getNavState('title', navigation) ||
    I18n.t('home.screen.title')
})
const handlers = {
  TOGGLE_LANGUAGE: props => lang => () => {
    I18n.defaultLocale = lang
    I18n.locale = lang
    props.setLanguage(lang)
    props.navigation.setParams({
      title: I18n.t('home.screen.title')
    })
  }
}

export default compose(
  setStatic('navigationOptions', navigationOptions),
  withApp(),
  withHandlers(handlers)
)(HomeView)
