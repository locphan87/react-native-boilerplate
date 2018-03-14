// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { equals } from 'ramda'

import { Text } from '../../components/Styled'

const Updating = () => <Text>Updating...</Text>
const withUpdating = (
  WrappedComponent: GenericComponent
) => ({ updating, ...rest }: GenericProps) => {
  const isUpdating = equals(true, updating)
  return (
    <View style={styles.container}>
      <WrappedComponent {...rest} />
      {isUpdating && <Updating />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default withUpdating
