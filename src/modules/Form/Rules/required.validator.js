// @flow
import { isNonEmptyString } from 'ramda-adjunct'

import I18n from '../../../i18n'

import type { RuleFn } from './Rules.type'

type Required = string => RuleFn
const required: Required = errorKey => ({ value, values, props }) => {
  if (!isNonEmptyString(value)) return I18n.t(errorKey)
}

export default required
