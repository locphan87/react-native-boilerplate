// @flow
import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import API from './GoalList.api'

type State = {
  list: GoalProp[],
  loading: boolean
}

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

const initialState: State = {
  list: [],
  loading: false
}

const reducer = typeToReducer(
  {
    [GET_GOAL_LIST]: {
      LOADING: state => ({
        ...state,
        loading: true
      }),
      SUCCESS: (state: State, action): State => ({
        ...state,
        loading: false,
        list: action.payload.data
      }),
      ERROR: state => ({
        ...state,
        loading: false
      })
    },
    [ADD_NEW_GOAL]: {
      SUCCESS: (state: State, { payload }): State => ({
        ...state,
        list: [payload.data, ...state.list]
      })
    },
    [REMOVE_GOAL]: {
      SUCCESS: (state: State, { meta }): State => {
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
