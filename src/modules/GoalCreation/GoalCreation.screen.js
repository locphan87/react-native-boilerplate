// @flow
import { actions } from '../GoalList/GoalList.reducer'
import withApp from '../../hoc/withApp/withApp.hoc'

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
  title: 'Goal Creation'
}

export default withApp({
  connect: { mapStateToProps, mapDispatchToProps },
  setStatic: ['navigationOptions', navigationOptions],
  withProps: handlers
})(GoalCreationView)
