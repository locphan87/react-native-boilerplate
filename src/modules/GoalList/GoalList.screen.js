// @flow
import React from 'react'
import { Button } from 'react-native'
import {
  compose,
  setStatic,
  lifecycle,
  withProps
} from 'recompose'
import { connect } from 'react-redux'

import { withApp } from '../../hoc'

import GoalListView from './GoalList.view'
import { actions } from './GoalList.reducer'

const mapStateToProps = (state): Object => ({
  loading: state.goal.loading,
  goalList: state.goal.list
})
const mapDispatchToProps = {
  getGoalList: actions.getGoalList
}
const handlers = props => ({
  OPEN_DETAILS: id => () => {
    props.navigation.navigate('GoalDetails', { id })
  }
})
const navigationOptions = ({ navigation }) => ({
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  setStatic('navigationOptions', navigationOptions),
  lifecycle({
    componentDidMount() {
      this.props.getGoalList()
    }
  }),
  withApp({ loading: true }),
  withProps(handlers)
)(GoalListView)
