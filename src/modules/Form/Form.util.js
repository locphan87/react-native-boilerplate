// @flow
import { pick } from 'ramda'

const getFieldProps = pick([
  'values',
  'errors',
  'touched',
  'setFieldValue',
  'setFieldTouched'
])

export default {
  getFieldProps
}
