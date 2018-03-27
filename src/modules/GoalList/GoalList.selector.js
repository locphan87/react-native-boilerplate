// @flow
import { createSelector } from 'reselect'
import { propEq } from 'ramda'

type State = Object
type StateSelector = State => Object

const goalList: StateSelector = state => state.goal.list
const getGoalById = createSelector([goalList], list => id =>
  list.find(propEq('id', id))
)

export default { goalList, getGoalById }
