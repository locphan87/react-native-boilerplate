import React from 'react'
import { View } from 'react-native'

import { Text } from '../../components/Styled'

const Progress = ({ start, end, current }) => {
  const percent = current * 100 / (end - start)
  const content = `${percent.toFixed(2)}%`

  return (
    <View>
      <Text>{content}</Text>
    </View>
  )
}

export default Progress
