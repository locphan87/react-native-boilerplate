// @flow
import React from 'react'
import { ListItem } from 'react-native-elements'

import { COLORS } from '../../theme'

type Props = GoalProp & {
  onPress: Function
}

const leftIcon = {
  name: 'target',
  type: 'foundation'
}

const GoalItem = ({ id, title, start, current, end, onPress }: Props) => {
  const progress = current * 100 / (end - start)
  return (
    <ListItem
      title={title}
      titleStyle={styles.title}
      subtitle={`${progress} %`}
      subtitleStyle={styles.subtitle}
      underlayColor={'blue'}
      onPress={onPress(id)}
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
