import keyMirror from 'key-mirror-nested'

const Routes = keyMirror({
  Root: {
    Home: null,
    Goal: null
  },
  Home: {
    Home: null,
    GoalDetails: null
  },
  Goal: {
    GoalList: null,
    GoalCreation: null,
    GoalDetails: null
  }
})

export { Routes }
