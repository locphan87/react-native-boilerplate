// @flow
import { createActions } from 'redux-actions'
import typeToReducer from 'type-to-reducer'
import Immutable from 'seamless-immutable'

import type { Goal } from '../../types'

import API from './GoalList.api'

type State = {
  list: Goal[],
  loading: boolean
}

const actions = createActions({
  ADD_NEW_GOAL: API.addGoal,
  GET_GOAL_LIST: API.getGoalList,
  REMOVE_GOAL: [API.removeGoal, id => ({ id })]
})

const initialState: State = Immutable({
  list: [],
  loading: false
})

const reducer = typeToReducer(
  {
    [actions.getGoalList]: {
      LOADING: state => ({
        ...state,
        loading: true
      }),
      SUCCESS: (state: State, action): State => {
        console.log('payload', action.payload)
        return {
          ...state,
          loading: false,
          list: action.payload.data
        }
      },
      ERROR: state => ({
        ...state,
        loading: false
      })
    },
    [actions.addNewGoal]: {
      SUCCESS: (state: State, { payload }): State => ({
        ...state,
        list: [payload.data, ...state.list]
      })
    },
    [actions.removeGoal]: {
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

export { actions, initialState }
export default reducer
