import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../../utils/test.util'
import { MAIN_THEME } from '../../../themes'

import Wrapper from './Wrapper.component'

const props = {
  theme: MAIN_THEME
}
const wrapper = shallow(<Wrapper {...props} />)

describe('Styled Wrapper', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    },
    {
      props: {
        ...props,
        bgColor: 'red'
      },
      description: 'custom bg color'
    }
  ])
})
