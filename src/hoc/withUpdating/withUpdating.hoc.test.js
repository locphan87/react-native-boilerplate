import React from 'react'
import { View } from 'react-native'
import { shallow } from 'enzyme'
import { isFunction } from 'ramda-adjunct'

import { snapTest } from '../../utils/test.util'

import { simulatePending, withUpdating } from './withUpdating.hoc'

describe('withUpdating', () => {
  const Component = withUpdating(View)
  const wrapper = shallow(<Component />)
  snapTest(wrapper, [
    {
      props: { updating: true },
      description: 'updating state'
    },
    {
      props: { updating: false },
      description: 'normal state'
    }
  ])
})

describe('simulatePending', () => {
  const updates = ['getArticleList']
  const props = {
    setUpdating: jest.fn(),
    getArticleList: jest.fn(() => Promise.resolve([]))
  }
  test('should call setUpdating before each update on SUCESS', async () => {
    const actual = simulatePending(updates)(props)
    expect(isFunction(actual.getArticleList)).toBe(true)
    await actual.getArticleList()
    expect(props.setUpdating).toBeCalled()
  })
  test('should call setUpdating before each update on FAIL', async () => {
    const actual = simulatePending(updates)({
      ...props,
      getArticleList: jest.fn(() => Promise.reject(new Error('FAIL')))
    })
    await actual.getArticleList()
    expect(props.setUpdating).toBeCalled()
  })
})
