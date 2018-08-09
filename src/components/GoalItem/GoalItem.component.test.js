import { testSnapshots } from '../../utils/test.util'

import GoalItem from './GoalItem.component'

const props = {
  id: 1,
  title: 'title',
  start: 1,
  current: 1,
  end: 2,
  onPress: id => jest.fn()
}

describe('GoalItem', () => {
  testSnapshots(GoalItem, [
    {
      props,
      description: 'basic render'
    }
  ])
})
