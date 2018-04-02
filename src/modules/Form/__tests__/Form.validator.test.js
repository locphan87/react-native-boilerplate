import { validator, RULES } from '../index'

describe('Form Validator', () => {
  describe('validator', () => {
    test('should pass one validator', () => {
      const actual = validator({
        title: [RULES.required('required')]
      })({ title: 'abc' })
      expect(actual).toEqual({})
    })
    test('should fail one validator', () => {
      const actual = validator({
        title: [RULES.required('required')]
      })({ title: undefined })
      expect(actual).toEqual({ title: 'required' })
    })
    test('should fail multi validators', () => {
      const actual = validator({
        title: [
          RULES.required('required'),
          RULES.minLength('must have at least 4 characters', 4)
        ]
      })({ title: 'abc' })
      expect(actual).toEqual({ title: 'must have at least 4 characters' })
    })
  })
})
