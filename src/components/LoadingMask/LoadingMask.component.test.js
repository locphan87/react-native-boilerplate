import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../utils/test.util'

import LoadingMask from './LoadingMask.component'

const props = {}
const wrapper = shallow(<LoadingMask {...props} />)

describe('LoadingMask', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    }
  ])
})
