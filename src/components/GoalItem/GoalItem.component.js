// @flow
import React from 'react'
import { ListItem } from 'react-native-elements'

import { COLORS } from '../../theme'

type Props = {
  title: string,
  start: number,
  current: number,
  end: number,
  onPress: any => void
}

const leftIcon = {
  name: 'target',
  type: 'foundation'
}
const GoalItem = ({ title, start, current, end, onPress }: Props) => {
  const progress = current * 100 / (end - start)
  return (
    <ListItem
      title={title}
      titleStyle={styles.title}
      subtitle={`${progress} %`}
      subtitleStyle={styles.subtitle}
      underlayColor={'blue'}
      onPress={onPress}
      leftIcon={leftIcon}
    />
  )
}

const styles = {
  title: {
    color: COLORS.white,
    marginLeft: 5
  },
  subtitle: {
    marginLeft: 5
  }
}

export default GoalItem
