// @flow
import { compose, setStatic, withProps } from 'recompose'
import { connect } from 'react-redux'

import { actions } from '../GoalList/GoalList.reducer'
import { getNavState } from '../Navigation/Navigation.util'
import { withApp } from '../../hoc'
import selector from '../GoalList/GoalList.selector'

import GoalDetailsView from './GoalDetails.view'

const mapStateToProps = (state, { navigation }) => {
  const id = getNavState('id', navigation)
  const goalItem = selector.getGoalById(state)(id)

  return {
    updating: state.goal.updating,
    goalItem
  }
}
const mapDispatchToProps = {
  removeGoal: actions.removeGoal
}
const handlers = ({ removeGoal, navigation }) => ({
  REMOVE_GOAL: async () => {
    const id = getNavState('id', navigation)
    await removeGoal(id)
    navigation.goBack()
  }
})
const navigationOptions = {
  title: 'Goal Details'
}
const isMissingItem = ({ goalItem }) => !goalItem

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  setStatic('navigationOptions', navigationOptions),
  withApp({
    updating: true,
    renderWhen: [
      {
        when: isMissingItem,
        render: 'Nothing'
      }
    ]
  }),
  withProps(handlers)
)(GoalDetailsView)
