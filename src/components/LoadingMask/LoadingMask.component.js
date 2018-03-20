// @flow
import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'

import { Wrapper } from '../Styled'

const LoadingMask = (props: GenericProps) => (
  <Wrapper style={[styles.container, props.style]}>
    <ActivityIndicator />
  </Wrapper>
)
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default LoadingMask
