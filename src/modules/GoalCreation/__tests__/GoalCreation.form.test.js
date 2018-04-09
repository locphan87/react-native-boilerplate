import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../../utils/test.util'
import { InnerForm, handleSubmit } from '../GoalCreation.form.js'

const props = {
  isValid: false,
  isSubmitting: false,
  handleSubmit: jest.fn()
}
const wrapper = shallow(<InnerForm {...props} />)

describe('module GoalCreation form', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    },
    {
      props: {
        ...props,
        isValid: true
      },
      description: 'when form is valid'
    }
  ])

  describe('handleSubmit', () => {
    test('should call setSubmitting after submit', async () => {
      const bag = {
        props: {
          onSubmit: jest.fn()
        },
        setSubmitting: jest.fn()
      }
      await handleSubmit({ title: 'foo bar' }, bag)
      expect(bag.props.onSubmit).toBeCalledWith({ title: 'foo bar' })
      expect(bag.setSubmitting).toBeCalledWith(false)
    })
  })
})
