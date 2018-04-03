// @flow
type RuleOutput = string | void
type RuleInput = {
  value: string,
  values: Object,
  props: Object
}
type RuleFn = RuleInput => RuleOutput

export type { RuleFn }
