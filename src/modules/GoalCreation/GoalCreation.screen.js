// @flow
import { addNewGoal } from '../GoalList/GoalList.reducer'
import withApp from '../../hoc/withApp/withApp.hoc'

import GoalCreationView, { update } from './GoalCreation.view'

const mapDispatchToProps = {
  addNewGoal
}

export default withApp({
  connect: { mapDispatchToProps },
  update
})(GoalCreationView)
