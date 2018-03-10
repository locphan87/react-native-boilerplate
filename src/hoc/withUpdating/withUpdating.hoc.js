// @flow
import React, { type ComponentType } from 'react'
import { View } from 'react-native'

import { Text } from '../../components/Styled'

type Props = Object

const Updating = () => <Text>Updating...</Text>
const withUpdating = (
  WrappedComponent: ComponentType<Props>
) => (props: Props) => {
  const isUpdating = props.updating
  return (
    <View style={{ flex: 1 }}>
      <WrappedComponent {...props} />
      {isUpdating && <Updating />}
    </View>
  )
}

export default withUpdating
