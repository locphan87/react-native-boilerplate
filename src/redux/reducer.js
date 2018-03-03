// @flow
import { combineReducers } from 'redux'

import goal from '../modules/GoalList/GoalList.reducer'

const reducer = combineReducers({
  goal
})

export default reducer
