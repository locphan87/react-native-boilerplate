// @flow
import React from 'react'
import { Button } from 'react-native'

import Progress from '../../components/Progress/Progress.component'
import { Wrapper, Text } from '../../components/Styled'

type Props = {
  goalItem: GoalProp,
  REMOVE_GOAL: Function
}

const GoalDetailsView = ({
  REMOVE_GOAL,
  goalItem
}: Props) => (
  <Wrapper>
    <Text>{goalItem.title}</Text>
    <Text>Start: {goalItem.start}</Text>
    <Text>Current: {goalItem.current}</Text>
    <Text>Target: {goalItem.end}</Text>
    <Progress {...goalItem} />
    <Button title={'Delete'} onPress={REMOVE_GOAL} />
  </Wrapper>
)

export default GoalDetailsView
