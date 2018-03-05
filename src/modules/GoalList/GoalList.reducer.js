// @flow
import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import API from './GoalList.api'

// action types
const ADD_NEW_GOAL = 'GOAL/ADD_NEW_GOAL'
const REMOVE_GOAL = 'GOAL/REMOVE_GOAL'
const GET_GOAL_LIST = 'GOAL/GET_GOAL_LIST'

const getGoalList = createAction(
  GET_GOAL_LIST,
  API.getGoalList
)
const addNewGoal = createAction(ADD_NEW_GOAL, API.addGoal)
const removeGoal = createAction(
  REMOVE_GOAL,
  API.removeGoal,
  id => ({ id })
)
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
    [GET_GOAL_LIST]: {
      SUCCESS: (state, action) => ({
        ...state,
        list: action.payload.data
      })
    },
    [ADD_NEW_GOAL]: {
      SUCCESS: (state, { payload }) => ({
        ...state,
        list: [payload.data, ...state.list]
      })
    },
    [REMOVE_GOAL]: {
      SUCCESS: (state, { meta }) => {
        const keepItem = item => item.id !== meta.id
        const newGoalList = state.list.filter(keepItem)
        return {
          ...state,
          list: newGoalList
        }
      }
    }
  },
  initialState
)

export { actions }
export default reducer
