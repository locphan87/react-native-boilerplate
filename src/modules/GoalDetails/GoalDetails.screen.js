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
import handlers from './GoalDetails.handler'

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
    updates: ['removeGoal'],
    renderWhen
  }),
  withHandlers(handlers)
)(GoalDetailsView)
