import { testSnapshots } from '../../../utils/test.util'
import { MAIN_THEME } from '../../../themes'

import Text from './Text.component'

const props = {
  h1: true,
  theme: MAIN_THEME
}

describe('Styled Text', () => {
  testSnapshots(Text, [
    {
      props,
      description: 'basic render'
    }
  ])
})
