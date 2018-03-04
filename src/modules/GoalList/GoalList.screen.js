// @flow
import withApp from '../../hoc/withApp/withApp.hoc'

import GoalListView from './GoalList.view'
import { actions } from './GoalList.reducer'

const mapStateToProps = (state): Object => ({
  goalList: state.goal.list
})
const mapDispatchToProps = {
  getGoalList: actions.getGoalList
}
const handlers = {
  OPEN_DETAILS: ({ navigation }) => id => () => {
    navigation.navigate('GoalDetails')
    alert(`Navigate to the goal id ${id}`)
  }
}

export default withApp({
  connect: { mapStateToProps, mapDispatchToProps },
  lifecycle: {
    componentDidMount() {
      this.props.getGoalList()
    }
  },
  withHandlers: handlers
})(GoalListView)
