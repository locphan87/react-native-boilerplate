// @flow
import { addNewGoal } from '../GoalList/GoalList.reducer'
import withApp from '../../hoc/withApp/withApp.hoc'

import GoalCreationView from './GoalCreation.view'

const mapDispatchToProps = {
  addNewGoal
}

const handlers = {
  ADD_NEW_GOAL: props => values => {
    alert(JSON.stringify(values))
  }
}

export default withApp({
  connect: { mapDispatchToProps },
  withHandlers: handlers
})(GoalCreationView)
