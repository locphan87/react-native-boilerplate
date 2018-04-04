import React from 'react'
import { shallow } from 'enzyme'

import { snapTest, singleSnapTest } from '../../utils/test.util'

import GoalList from './GoalList.component'

const item = {
  id: 1,
  title: 'title',
  start: 1,
  current: 1,
  end: 2
}
const props = {
  list: [item],
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

  describe('sub render', () => {
    const List = wrapper.find('FlatList')
    const Item = List.props().renderItem({ item })

    singleSnapTest(Item, 'render goal item correctly')
  })
})
