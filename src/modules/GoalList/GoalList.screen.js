// @flow
import React from 'react'
import { Button } from 'react-native'
import { compose, setStatic, lifecycle, withHandlers } from 'recompose'
import { connect } from 'react-redux'

import { withApp } from '../../hoc'
import I18n from '../../i18n'
import { Routes } from '../Navigation/Navigation.constant'

import GoalListView from './GoalList.view'
import { actions } from './GoalList.reducer'
import handlers from './GoalList.handler'

const mapStateToProps = (state): Object => ({
  loading: state.goal.loading,
  goalList: state.goal.list
})
const mapDispatchToProps = {
  getGoalList: actions.getGoalList
}
const navigationOptions = ({ navigation }) => ({
  headerTitle: I18n.t('goalList.screen.title'),
  tabBarLabel: I18n.t('goalList.screen.title'),
  headerRight: (
    <Button
      title={I18n.t('goalList.screen.newGoal')}
      onPress={() => {
        navigation.navigate(Routes.Goal.GoalCreation)
      }}
    />
  )
})
const callbacks = {
  componentDidMount() {
    this.props.getGoalList()
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  setStatic('navigationOptions', navigationOptions),
  lifecycle(callbacks),
  withApp({ loading: true }),
  withHandlers(handlers)
)(GoalListView)
