// @flow
import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Wrapper } from '../Styled'
import type { GenericProps } from '../../types'

import styles from './LoadingMask.component.style'

const LoadingMask = (props: GenericProps) => (
  <Wrapper style={[styles.container, props.style]}>
    <ActivityIndicator />
  </Wrapper>
)

export default LoadingMask
