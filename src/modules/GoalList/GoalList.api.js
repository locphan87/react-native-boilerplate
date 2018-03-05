// @flow
import api from '../../utils/api.util'

const getGoalList = () => api.get('goals')
const addGoal = (payload: Payload) =>
  api.post('goals', payload)
const removeGoal = (id: number) => api.delete(`goals/${id}`)

export default {
  getGoalList,
  addGoal,
  removeGoal
}
