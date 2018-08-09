import { compose, defaultTo } from 'ramda'

import selector from '../GoalList.selector'

describe('GoalList Selector', () => {
  const items = [
    {
      id: 1,
      text: 'item 1'
    },
    {
      id: 2,
      text: 'item 2'
    }
  ]
  const state = {
    goal: {
      list: items
    }
  }

  describe('goalList', () => {
    test('should get the goal list', () => {
      expect(selector.goalList(state)).toEqual(items)
    })
  })
  describe('getGoalById', () => {
    test('should get goal item by a valid id', () => {
      expect(selector.getGoalById(state)(1)).toEqual(items[0])
    })
    test('should not get goal item by an invalid ID', () => {
      const actual = compose(
        defaultTo('NOTHING'),
        selector.getGoalById(state)
      )(9999)
      expect(actual).toEqual('NOTHING')
    })
  })
})
