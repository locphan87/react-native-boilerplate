// @flow
import React from 'react'
import { Button } from 'react-native'
import {
  compose,
  setStatic,
  lifecycle,
  withHandlers
} from 'recompose'
import { connect } from 'react-redux'

import { withApp } from '../../hoc'
import I18n from '../../i18n'

import GoalListView from './GoalList.view'
import { actions } from './GoalList.reducer'

const mapStateToProps = (state): Object => ({
  loading: state.goal.loading,
  goalList: state.goal.list
})
const mapDispatchToProps = {
  getGoalList: actions.getGoalList
}
const handlers = {
  OPEN_DETAILS: props => id => () => {
    const { navigation: { navigate } } = props
    navigate('GoalDetails', { id })
  }
}
const navigationOptions = ({ navigation }) => ({
  headerTitle: I18n.t('goalList.screen.title'),
  headerRight: (
    <Button
      title={I18n.t('goalList.screen.newGoal')}
      onPress={() => {
        navigation.navigate('GoalCreation')
      }}
    />
  )
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  setStatic('navigationOptions', navigationOptions),
  lifecycle({
    componentDidMount() {
      this.props.getGoalList()
    }
  }),
  withApp({ loading: true }),
  withHandlers(handlers)
)(GoalListView)
