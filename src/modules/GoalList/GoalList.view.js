// @flow
import React from 'react'

import GoalList from '../../components/GoalList/GoalList.component'
import { Wrapper } from '../../components/Styled'
import type { Goal } from '../../types'

type Props = {
  OPEN_DETAILS: Function,
  goalList: Goal[]
}

const GoalListView = ({ OPEN_DETAILS, goalList }: Props) => (
  <Wrapper>
    <GoalList list={goalList} onPress={OPEN_DETAILS} />
  </Wrapper>
)
GoalListView.displayName = 'GoalListView'

export default GoalListView
