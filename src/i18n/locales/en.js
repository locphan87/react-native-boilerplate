export default {
  home: {
    screen: {
      title: 'Home'
    },
    view: {
      welcome: 'Welcome to React Native Boilerplate'
    }
  },
  goalList: {
    screen: {
      title: 'Goal List',
      newGoal: 'New Goal'
    }
  },
  goalDetails: {
    screen: {
      title: 'Goal Details'
    },
    view: {
      buttons: {
        delete: 'Delete'
      }
    }
  },
  goalCreation: {
    screen: {
      title: 'Goal Creation'
    },
    form: {
      title: 'Title',
      start: 'Start',
      current: 'Current',
      end: 'End',
      submit: 'Submit',
      errors: {
        title: {
          required: 'Title is required',
          minLength: 'Title should have at least {{minLength}} characters'
        },
        start: {
          required: 'Start is required'
        }
      }
    }
  }
}
