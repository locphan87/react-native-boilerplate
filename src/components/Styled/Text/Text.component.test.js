import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../../utils/test.util'
import { MAIN_THEME } from '../../../themes'

import Text from './Text.component'

const props = {
  h1: true,
  theme: MAIN_THEME
}
const wrapper = shallow(<Text {...props} />)

describe('Styled Text', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    }
  ])
})
