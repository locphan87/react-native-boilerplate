// @flow
import { compose, keys, head, map, filter } from 'ramda'
import { isString } from 'ramda-adjunct'

import type { RuleFn } from './Rules/Rules.type'

type Errors = Object
type Config = {
  [ruleName: string]: RuleFn[]
}

type Validator = Config => (values: Object, props: Object) => Errors
const validator: Validator = config => (values, props) =>
  keys(config).reduce((acc, key) => {
    const firstError = compose(
      head,
      filter(isString),
      map(rule =>
        rule({
          value: values[key],
          values,
          props
        })
      )
    )(config[key])

    if (firstError) {
      acc[key] = firstError
    }

    return acc
  }, {})

export default validator
