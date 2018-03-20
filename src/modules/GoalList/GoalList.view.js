// @flow
import React from 'react'

import GoalList from '../../components/GoalList/GoalList.component'
import { Wrapper } from '../../components/Styled'

type Props = {
  OPEN_DETAILS: Function,
  goalList: GoalProp[]
}

const GoalListView = ({
  OPEN_DETAILS,
  goalList,
  language
}: Props) => (
  <Wrapper>
    <GoalList list={goalList} onPress={OPEN_DETAILS} />
  </Wrapper>
)

export default GoalListView
