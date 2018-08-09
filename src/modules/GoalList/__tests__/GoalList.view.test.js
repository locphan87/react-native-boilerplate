import { testSnapshots } from '../../../utils/test.util'
import GoalListView from '../GoalList.view'

const props = {
  goalList: [],
  OPEN_DETAILS: jest.fn()
}

describe('GoalList View', () => {
  testSnapshots(GoalListView, [
    {
      props,
      description: 'basic render'
    }
  ])
})
