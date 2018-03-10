// @flow
import React from 'react'
import { Button } from 'react-native'

import withApp from '../../hoc/withApp/withApp.hoc'

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

export default withApp({
  connect: { mapStateToProps, mapDispatchToProps },
  loading: true,
  setStatic: ['navigationOptions', navigationOptions],
  lifecycle: {
    componentDidMount() {
      this.props.getGoalList()
    }
  },
  withProps: handlers
})(GoalListView)
