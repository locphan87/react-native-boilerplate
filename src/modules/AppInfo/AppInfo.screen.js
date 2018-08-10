// @flow
import React from 'react'
import { compose, setStatic } from 'recompose'

import HeaderTitle from '../Navigation/HeaderTitle/HeaderTitle.component'
import { withApp } from '../../hoc'

import AppInfoView from './AppInfo.view'

const navigationOptions = {
  headerTitle: <HeaderTitle titleKey="appInfo.screen.title" />
}

export default compose(
  setStatic('navigationOptions', navigationOptions),
  withApp()
)(AppInfoView)
