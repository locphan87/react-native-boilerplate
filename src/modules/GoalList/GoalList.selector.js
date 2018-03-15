import { createSelector } from 'reselect'
import { propEq } from 'ramda'

const goalList = state => state.goal.list
const getGoalById = createSelector([goalList], list => id =>
  list.find(propEq('id', id))
)

export default { goalList, getGoalById }
