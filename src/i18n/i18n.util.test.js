import { keyWithNameSpace, translateWithNamespace } from './i18n.util'

describe('I18n util', () => {
  describe('translateWithNamespace', () => {
    test('should combine namepsace and term', () => {
      expect(translateWithNamespace('form')('errors.title')).toEqual(
        'form.errors.title'
      )
    })
  })
  describe('keyWithNameSpace', () => {
    test('should combine namepsace and term', () => {
      expect(keyWithNameSpace('ns')('term')).toEqual('ns.term')
    })
  })
})
