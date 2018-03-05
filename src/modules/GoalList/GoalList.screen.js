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
const handlers = props => ({
  OPEN_DETAILS: id => () => {
    props.navigation.navigate('GoalDetails', { id })
  }
})

export default withApp({
  connect: { mapStateToProps, mapDispatchToProps },
  lifecycle: {
    componentDidMount() {
      this.props.getGoalList()
    }
  },
  withProps: handlers
})(GoalListView)
