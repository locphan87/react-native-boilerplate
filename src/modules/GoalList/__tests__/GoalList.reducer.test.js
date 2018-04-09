import reducer, { initialState, actions } from '../GoalList.reducer'

jest.mock('../GoalList.api', () => ({
  getGoalList: () => [],
  addGoal: payload => payload,
  removeGoal: id => id
}))

describe('GoalList Reducer', () => {
  describe('actions', () => {
    describe('get goal list', () => {
      test('should return a correct action', () => {
        const actual = actions.getGoalList()
        const expected = {
          type: 'GET_GOAL_LIST',
          payload: []
        }
        expect(actual).toEqual(expected)
      })
    })
    describe('add a new goal', () => {
      test('should return a correct action', () => {
        const payload = {
          title: 'new goal',
          start: 0,
          end: 10,
          current: 5
        }
        const actual = actions.addNewGoal(payload)
        const expected = {
          type: 'ADD_NEW_GOAL',
          payload
        }
        expect(actual).toEqual(expected)
      })
    })
    describe('remove a goal', () => {
      test('should return a correct action', () => {
        const actual = actions.removeGoal('123')
        const expected = {
          type: 'REMOVE_GOAL',
          payload: '123',
          meta: { id: '123' }
        }
        expect(actual).toEqual(expected)
      })
    })
  })
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
