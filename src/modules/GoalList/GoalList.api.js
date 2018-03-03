// @flow
import api from '../../utils/api.util'

const getGoalList = () => api.get('goals')
const addGoal = (payload: Object) => api.post('goals', payload)
const removeGoal = (payload: Object) => api.delete('goals', payload)

export default {
  getGoalList,
  addGoal,
  removeGoal
}
