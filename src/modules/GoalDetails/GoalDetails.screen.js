// @flow
import { compose, setStatic, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { isNil, prop } from 'ramda'

import { actions } from '../GoalList/GoalList.reducer'
import { getNavState } from '../Navigation/Navigation.util'
import { withApp } from '../../hoc'
import Constants from '../../constants'
import I18n from '../../i18n'
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
const handlers = {
  REMOVE_GOAL: props => async () => {
    const { removeGoal, navigation } = props
    const id = getNavState('id', navigation)
    await removeGoal(id)
    navigation.goBack()
  }
}
const navigationOptions = ({ navigation }) => ({
  headerTitle: I18n.t('goalDetails.screen.title')
})
const isMissingItem = compose(isNil, prop('goalItem'))
const renderWhen = [
  {
    when: isMissingItem,
    render: Constants.NOTHING
  }
]

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  setStatic('navigationOptions', navigationOptions),
  withApp({
    updating: true,
    renderWhen
  }),
  withHandlers(handlers)
)(GoalDetailsView)
