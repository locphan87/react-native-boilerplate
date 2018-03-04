// @flow
import React from 'react'
import type { NavigationState, NavigationScreenProp } from 'react-navigation'

import GoalList from '../../components/GoalList/GoalList.component'
import { Wrapper } from '../../components/Styled'

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
  OPEN_DETAILS: Function,
  goalList: GoalProp[]
}

const GoalListView = ({ OPEN_DETAILS, goalList }: Props) => (
  <Wrapper>
    <GoalList list={goalList} onPress={OPEN_DETAILS} />
  </Wrapper>
)

export default GoalListView
