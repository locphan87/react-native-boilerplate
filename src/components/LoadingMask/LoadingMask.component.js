// @flow
import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Wrapper } from '../Styled'

const LoadingMask = (prop: GenericProps) => (
  <Wrapper>
    <ActivityIndicator />
  </Wrapper>
)

export default LoadingMask
