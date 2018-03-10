// @flow
import API from '../../services/API'
import { delay } from '../../utils/common.util'

const getGoalList = async () => {
  await delay()
  return API.get('goals')
}
const addGoal = async (payload: Payload) => {
  await delay()
  return API.post('goals', payload)
}
const removeGoal = async (id: number) => {
  await delay()
  return API.delete(`goals/${id}`)
}

export default {
  getGoalList,
  addGoal,
  removeGoal
}
