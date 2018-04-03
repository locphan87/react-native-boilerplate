// @flow
import { isNil } from 'ramda'

import I18n from '../../../i18n'

import type { RuleFn } from './Rules.type'

type MinLength = (errorKey: string, _minLength: number) => RuleFn
const minLength: MinLength = (errorKey, _minLength) => ({
  value,
  values,
  props
}) => {
  if (isNil(value)) return
  if (value.length < _minLength)
    return I18n.t(errorKey, { minLength: _minLength })
}

export default minLength
