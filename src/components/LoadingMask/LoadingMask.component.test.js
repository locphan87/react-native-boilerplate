import { testSnapshots } from '../../utils/test.util'

import LoadingMask from './LoadingMask.component'

const props = {}

describe('LoadingMask', () => {
  testSnapshots(LoadingMask, [
    {
      props,
      description: 'basic render'
    }
  ])
})
