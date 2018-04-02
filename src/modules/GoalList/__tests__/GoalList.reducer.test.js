import reducer, { initialState } from '../GoalList.reducer'

describe('GoalList Reducer', () => {
  describe('reducer', () => {
    describe('getGoalList', () => {
      test('on loading', () => {
        const actual = reducer(initialState, {
          type: 'GET_GOAL_LIST_LOADING'
        })
        expect(actual).toEqual({
          ...initialState,
          loading: true
        })
      })
      test('on error', () => {
        const actual = reducer(initialState, {
          type: 'GET_GOAL_LIST_ERROR'
        })
        expect(actual).toEqual({
          ...initialState,
          loading: false
        })
      })
      test('on success', () => {
        const actual = reducer(initialState, {
          type: 'GET_GOAL_LIST_SUCCESS',
          payload: { data: [1, 2, 3] }
        })
        expect(actual).toEqual({
          ...initialState,
          loading: false,
          list: [1, 2, 3]
        })
      })
    })
    describe('addNewGoal', () => {
      test('on success', () => {
        const actual = reducer(initialState, {
          type: 'ADD_NEW_GOAL_SUCCESS',
          payload: { data: 1 }
        })
        expect(actual).toEqual({
          ...initialState,
          list: [1]
        })
      })
    })
    describe('removeGoal', () => {
      test('on success', () => {
        const state = {
          ...initialState,
          list: [{ id: 1 }]
        }
        const actual = reducer(state, {
          type: 'REMOVE_GOAL_SUCCESS',
          meta: { id: 1 }
        })
        expect(actual).toEqual({
          ...initialState,
          list: []
        })
      })
    })
  })
})
