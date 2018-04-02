import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../../utils/test.util'
import GoalListView from '../GoalList.view'

const props = {
  goalList: [],
  OPEN_DETAILS: jest.fn()
}
const wrapper = shallow(<GoalListView {...props} />)

describe('GoalList View', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    }
  ])
})
