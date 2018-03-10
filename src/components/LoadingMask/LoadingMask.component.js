// @flow
import React from 'react'

import { Wrapper, Text } from '../Styled'

type Props = Object

const LoadingMask = (prop: Props) => (
  <Wrapper>
    <Text>Loading...</Text>
  </Wrapper>
)

export default LoadingMask
