// TODO fix flow issues
import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import API from './GoalList.api'

const getGoalList = createAction('GOAL/GET_LIST', API.getGoalList)
const addNewGoal = createAction('GOAL/ADD_NEW', API.addGoal)
const removeGoal = createAction('GOAL/REMOVE', API.removeGoal)
const actions = {
  getGoalList,
  addNewGoal,
  removeGoal
}

const initialState = {
  list: []
}

const reducer = typeToReducer(
  {
    [getGoalList]: {
      SUCCESS: (state, action) => ({
        ...state,
        list: action.payload.data
      })
    },
    [addNewGoal](state, { payload }) {
      const newGoal = payload
      return {
        ...state,
        list: [newGoal, ...state.list]
      }
    },
    [removeGoal](state, { payload }) {
      const keepItem = item => item.id !== payload.id
      const newGoalList = state.list.filter(keepItem)
      return {
        ...state,
        list: newGoalList
      }
    }
  },
  initialState
)

export { actions }
export default reducer
