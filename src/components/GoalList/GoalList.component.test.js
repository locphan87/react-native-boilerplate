import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../utils/test.util'

import GoalList from './GoalList.component'

const props = {
  list: [
    {
      id: 1,
      title: 'title',
      start: 1,
      current: 1,
      end: 2
    }
  ],
  onPress: id => jest.fn()
}
const wrapper = shallow(<GoalList {...props} />)

describe('GoalList', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    }
  ])
})
