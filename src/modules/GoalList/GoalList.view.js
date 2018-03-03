// @flow
import React from 'react'

import GoalList from '../../components/GoalList/GoalList.component'
import { Wrapper } from '../../components/Styled'

type Props = {
  navigation: Object,
  update: string => Function,
  goalList: Goal[]
}

const MSG = {
  OPEN_DETAILS: 'OPEN_DETAILS'
}
const update = ({ navigation }: Props) => ({
  [MSG.OPEN_DETAILS]: () => {
    navigation.navigate('GoalDetails')
    alert('You are awesome')
  }
})

const GoalListView = ({ update, goalList }: Props) => (
  <Wrapper>
    <GoalList list={goalList} onPress={update(MSG.OPEN_DETAILS)} />
  </Wrapper>
)

export { update }
export default GoalListView
