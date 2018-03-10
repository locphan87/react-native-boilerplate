// @flow
import API from '../../services/API'

const delay = (ms = 3000) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
const getGoalList = async () => {
  await delay() // delay to show the spinner
  return API.get('goals')
}
const addGoal = (payload: Payload) =>
  API.post('goals', payload)
const removeGoal = (id: number) => API.delete(`goals/${id}`)

export default {
  getGoalList,
  addGoal,
  removeGoal
}
