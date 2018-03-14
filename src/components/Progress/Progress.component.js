// @flow
import React from 'react'
import { View } from 'react-native'

import { Text } from '../../components/Styled'

type Props = {
  start: number,
  current: number,
  end: number
}

const Progress = ({ start, end, current }: Props) => {
  const percent = current * 100 / (end - start)
  const content = `${percent.toFixed(2)}%`

  return (
    <View>
      <Text>{content}</Text>
    </View>
  )
}

export default Progress
