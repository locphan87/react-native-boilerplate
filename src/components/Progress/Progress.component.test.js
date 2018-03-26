import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../utils/test.util'

import { Percent, Progress } from './Progress.component'

const props = {
  start: 1,
  current: 2,
  end: 10
}
const percentWrapper = shallow(<Percent {...props} />)
const progressWrapper = shallow(<Progress {...props} />)

describe('Progress', () => {
  snapTest(progressWrapper, [
    {
      props,
      description: 'normal progress'
    }
  ])
  snapTest(percentWrapper, [
    {
      props: {
        ...props,
        type: 'simple'
      },
      description: 'simple percent'
    }
  ])
})
