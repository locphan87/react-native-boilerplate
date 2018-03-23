import path from 'path'

import React from 'react'
import { shallow } from 'enzyme'
import fakeProps from 'react-fake-props'

import { snapTest } from '../../utils/test.util'

import GoalItem from './GoalItem.component'

const props = fakeProps(path.join(__dirname, './GoalItem.component.js'))
const wrapper = shallow(<GoalItem {...props} />)

describe('GoalItem', () => {
  describe('snapshot', () => {
    snapTest(wrapper, [
      {
        props,
        description: 'basic render'
      }
    ])
  })
})
