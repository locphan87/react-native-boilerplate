import API from '../GoalList.api'

jest
  .mock('../../../services/API.service')
  .mock('../../../utils/common.util', () => ({
    delay: duration => Promise.resolve(duration)
  }))

describe('GoalList API', () => {
  test('should get the goal list', async () => {
    const actual = await API.getGoalList()
    expect(actual).toEqual('goals')
  })
  test('should add new goal', () => {
    expect(API.addGoal({ text: 'foo bar' })).toEqual({
      path: 'goals',
      method: 'post',
      payload: { text: 'foo bar' }
    })
  })
  test('should delete a goal', () => {
    expect(API.removeGoal(123)).toEqual({
      path: 'goals/123',
      method: 'delete'
    })
  })
})
