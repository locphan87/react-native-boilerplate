// @flow
import { getNavState } from '../Navigation/Navigation.util'

type Props = {
  navigation: Object,
  removeGoal: Function
}

const handlers = {
  REMOVE_GOAL: (props: Props) => async () => {
    const { removeGoal, navigation } = props
    const id = getNavState('id', navigation)
    await removeGoal(id)
    navigation.goBack()
  }
}

export default handlers
