// @flow
import I18n from 'react-native-i18n'

import en from './locales/en'
import vi from './locales/vi'

I18n.fallbacks = true
I18n.translations = {
  en,
  vi
}

const translateWithNamespace = (namespace: string) => (
  term: string,
  ...rest: any[]
) => I18n.t(`${namespace}.${term}`, ...rest)

export { translateWithNamespace }
export default I18n
