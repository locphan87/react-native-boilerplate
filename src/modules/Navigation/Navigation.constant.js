import keyMirror from 'key-mirror-nested'

const Routes = keyMirror({
  Root: {
    Home: null,
    AppInfo: null
  },
  Home: {
    Home: null
  },
  AppInfo: {
    AppInfo: null
  }
})

export { Routes }
