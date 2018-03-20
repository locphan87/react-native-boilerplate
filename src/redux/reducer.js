// @flow
import { combineReducers } from 'redux'

import goal from '../modules/GoalList/GoalList.reducer'
import language from '../modules/Language/Language.reducer'

const reducer = combineReducers({
  goal,
  language
})

export default reducer
