// @flow
import React from 'react'
import { View } from 'react-native'
import { Slider } from 'react-native-elements'
import { propEq, map } from 'ramda'

import { Text } from '../../components/Styled'
import { withApp } from '../../hoc'
import { COLORS } from '../../themes'

type PercentProps = {
  start: number,
  current: number,
  end: number
}
type Props = PercentProps & {
  type?: string
}

const isSimple = propEq('type', 'simple')
const Percent = ({ start, current, end }: PercentProps) => {
  const percent = (current - start) * 100 / (end - start)
  const content = `${percent.toFixed(2)}%`

  return <Text color={COLORS.yellow}>{content}</Text>
}
const Progress = ({
  start,
  end,
  current,
  ...rest
}: Props) => {
  const percentProps: PercentProps = map(Number, {
    start,
    current,
    end
  })

  return (
    <View>
      <Slider
        minimumValue={percentProps.start}
        value={percentProps.current}
        maximumValue={percentProps.end}
        {...rest}
      />
      <View style={{ alignItems: 'center' }}>
        <Percent {...percentProps} />
      </View>
    </View>
  )
}

export default withApp({
  renderWhen: [
    {
      when: isSimple,
      render: Percent
    }
  ]
})(Progress)
