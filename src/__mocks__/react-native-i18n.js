const origin = require.requireActual('react-native-i18n').default

export default {
  ...origin,
  t: value => value
}
