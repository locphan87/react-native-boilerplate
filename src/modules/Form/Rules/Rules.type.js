// @flow
type RuleOutput = string | void
type RuleInput = {
  values: Object,
  props: Object
}
type RuleFn = RuleInput => RuleOutput
type DetailedRuleInput = RuleInput & {
  value: string
}
type DetailedRuleFn = DetailedRuleInput => RuleOutput

export type { RuleFn, DetailedRuleFn }
