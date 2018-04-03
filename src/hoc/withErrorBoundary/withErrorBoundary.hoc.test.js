import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../utils/test.util'

import { ErrorComponent, hasError } from './withErrorBoundary.hoc'

const props = {
  errors: [
    {
      code: 'INVALID_INPUTS',
      message: 'Invalid field inputs'
    }
  ]
}
const wrapper = shallow(<ErrorComponent {...props} />)

describe('HOC withErrorBoundary', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    }
  ])

  describe('hasError', () => {
    test('should return true when having errors', () => {
      expect(hasError({ errors: [{ code: 'NOT_FOUND' }] })).toEqual(true)
    })
    test('should return false when no errors', () => {
      expect(hasError({ errors: [] })).toEqual(false)
    })
  })
})
