import path from 'path'

import React from 'react'
import { shallow } from 'enzyme'
import fakeProps from 'react-fake-props'

import GoalItem from './GoalItem.component'

const _props = fakeProps(
  path.join(__dirname, './GoalItem.component.js')
)

jest.mock('react-native-elements', () => {
  const actual = require.requireActual(
    'react-native-elements'
  )
  return {
    ...actual,
    ListItem: 'ListItem'
  }
})

let wrapper = shallow(<GoalItem {..._props} />)

test('basic render', () => {
  expect(wrapper).toMatchSnapshot()
})
