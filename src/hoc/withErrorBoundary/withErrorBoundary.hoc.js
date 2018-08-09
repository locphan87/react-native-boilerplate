// @flow
import React from 'react'
import { compose, prop } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'

import { Wrapper, Text } from '../../components/Styled'
import renderWhen from '../renderWhen/renderWhen.hoc'

const ErrorComponent = () => (
  <Wrapper>
    <Text>Something went wrong, you can try to refetch again</Text>
  </Wrapper>
)
const hasError = compose(
  isNonEmptyArray,
  prop('errors')
)
const withErrorBoundary = renderWhen([
  {
    when: hasError,
    render: ErrorComponent
  }
])

export { ErrorComponent, hasError }
export default withErrorBoundary
