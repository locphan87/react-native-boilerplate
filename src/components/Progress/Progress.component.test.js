import { testSnapshots } from '../../utils/test.util'

import { Percent, Progress } from './Progress.component'

const props = {
  start: 1,
  current: 2,
  end: 10
}

describe('Progress', () => {
  testSnapshots(Progress, [
    {
      props,
      description: 'normal progress'
    }
  ])
  testSnapshots(Percent, [
    {
      props: {
        ...props,
        type: 'simple'
      },
      description: 'simple percent'
    }
  ])
})
