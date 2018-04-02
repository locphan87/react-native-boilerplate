// @flow
import I18n from 'react-native-i18n'

type I18nKey = string
type I18nParams = Object
type Namespace = string

type TranslateWithNamespace = Namespace => (
  term: I18nKey,
  param?: I18nParams
) => any
const translateWithNamespace: TranslateWithNamespace = namespace => (
  term,
  param
) => I18n.t(`${namespace}.${term}`, param)

type KeyWithNameSpace = Namespace => I18nKey => I18nKey
const keyWithNameSpace: KeyWithNameSpace = namespace => term =>
  `${namespace}.${term}`

export { translateWithNamespace, keyWithNameSpace }
