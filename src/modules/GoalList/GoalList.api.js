// @flow
import API from '../../services/API.service'
import type { Payload } from '../../types'
import { delay } from '../../utils/common.util'

const getGoalList = async () => {
  await delay(1500)

  return API.get('goals')
}
const addGoal = (payload: Payload) => API.post('goals', payload)
const removeGoal = (id: number) => API.delete(`goals/${id}`)

export default {
  getGoalList,
  addGoal,
  removeGoal
}
