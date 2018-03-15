// @flow
import { connect } from 'react-redux'
import { compose, withProps, setStatic } from 'recompose'

import { actions } from '../GoalList/GoalList.reducer'
import { withApp } from '../../hoc'
import I18n from '../../i18n'

import GoalCreationView from './GoalCreation.view'

const mapStateToProps = state => ({
  updating: state.goal.updating
})
const mapDispatchToProps = {
  addNewGoal: actions.addNewGoal
}
const handlers = ({ navigation, addNewGoal }) => ({
  ADD_NEW_GOAL: async values => {
    const newGoal = {
      id: Date.now(),
      ...values
    }
    await addNewGoal(newGoal)
    navigation.goBack()
  }
})
const navigationOptions = {
  title: I18n.t('goalCreation.screen.title')
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  setStatic('navigationOptions', navigationOptions),
  withApp({ updating: true }),
  withProps(handlers)
)(GoalCreationView)
