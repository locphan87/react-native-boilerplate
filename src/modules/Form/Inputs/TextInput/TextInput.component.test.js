import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../../../utils/test.util'

import TextInput from './TextInput.component'

const props = {
  name: 'title',
  placeholder: 'Enter your title',
  fieldProps: {
    values: {},
    touched: {},
    errors: {},
    setFieldValue: jest.fn(),
    setFieldTouched: jest.fn()
  }
}
const wrapper = shallow(<TextInput {...props} />)

describe('Form Inputs - TextInput', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    },
    {
      props: {
        ...props,
        fieldProps: {
          ...props.fieldProps,
          values: { title: '' },
          touched: { title: true },
          errors: { title: 'Title is required' }
        }
      },
      description: 'should render an error'
    }
  ])

  describe('events', () => {
    const Input = wrapper.find('Input')
    test('should call setFieldTouched', () => {
      Input.props().onBlur()
      expect(props.fieldProps.setFieldTouched).toBeCalled()
    })
    test('should call setFieldValue', () => {
      Input.props().onChangeText('new text')
      expect(props.fieldProps.setFieldValue).toBeCalledWith('title', 'new text')
    })
  })
})
