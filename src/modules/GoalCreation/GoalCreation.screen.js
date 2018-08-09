// @flow
import { connect } from 'react-redux'
import { compose, setStatic, withHandlers } from 'recompose'

import { actions } from '../GoalList/GoalList.reducer'
import { withApp } from '../../hoc'
import I18n from '../../i18n'

import handlers from './GoalCreation.handler'
import GoalCreationView from './GoalCreation.view'

const mapDispatchToProps = {
  addNewGoal: actions.addNewGoal
}
const navigationOptions = ({ navigation }) => ({
  headerTitle: I18n.t('goalCreation.screen.title')
})

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  setStatic('navigationOptions', navigationOptions),
  withApp({ updates: ['addNewGoal'] }),
  withHandlers(handlers)
)(GoalCreationView)
