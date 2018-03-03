// @flow
import withApp from '../../hoc/withApp/withApp.hoc'

import GoalListView, { update } from './GoalList.view'
import { actions } from './GoalList.reducer'

const mapStateToProps = (state): Object => ({
  goalList: state.goal.list
})
const mapDispatchToProps = {
  getGoalList: actions.getGoalList
}

export default withApp({
  connect: { mapStateToProps, mapDispatchToProps },
  update,
  lifecycle: {
    componentDidMount() {
      this.props.getGoalList()
    }
  }
})(GoalListView)
