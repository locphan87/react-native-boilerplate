// @flow
import { renderNothing } from 'recompose'

import { actions } from '../GoalList/GoalList.reducer'
import { getNavState } from '../Navigation/Navigation.util'
import withApp from '../../hoc/withApp/withApp.hoc'
import selector from '../GoalList/GoalList.selector'

import GoalDetailsView from './GoalDetails.view'

const mapStateToProps = (state, { navigation }) => {
  const id = getNavState('id', navigation)
  const goalItem = selector.getGoalById(state)(id)

  return {
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

export default withApp({
  connect: { mapStateToProps, mapDispatchToProps },
  setStatic: ['navigationOptions', navigationOptions],
  branch: [props => !props.goalItem, renderNothing],
  withProps: handlers
})(GoalDetailsView)
