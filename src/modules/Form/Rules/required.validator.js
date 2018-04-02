// @flow
import { isNonEmptyString } from 'ramda-adjunct'

import I18n from '../../../i18n'

import type { DetailedRuleFn } from './Rules.type'

type Required = string => DetailedRuleFn
const required: Required = errorKey => ({ value, values, props }) => {
  if (!isNonEmptyString(value)) return I18n.t(errorKey)
}

export default required
