// @flow

type Props = {
  navigation: Object,
  addNewGoal: Function
}

const handlers = {
  ADD_NEW_GOAL: (props: Props) => async (values: Object) => {
    const { navigation, addNewGoal } = props
    const newGoal = {
      id: Date.now(),
      ...values
    }
    await addNewGoal(newGoal)
    navigation.goBack()
  }
}

export default handlers
