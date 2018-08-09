import { testSnapshots } from '../../../utils/test.util'
import { MAIN_THEME } from '../../../themes'

import Wrapper from './Wrapper.component'

const props = {
  theme: MAIN_THEME
}

describe('Styled Wrapper', () => {
  testSnapshots(Wrapper, [
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
