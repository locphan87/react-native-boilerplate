import { createSelector } from 'reselect'

const goalList = state => state.goal.list
const getGoalById = createSelector([goalList], list => id =>
  list.find(item => item.id === id)
)

export default { goalList, getGoalById }
