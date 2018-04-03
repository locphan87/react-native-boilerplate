import minLength from '../minLength.validator'

describe('Form Rules minLength', () => {
  const rule = minLength('at least 3 characters', 3)
  test('should fail with invalid rules', () => {
    const values = ['1', '12']
    values.forEach(value => {
      expect(rule({ value })).toEqual('at least 3 characters')
    })
  })
  test('should pass with valid rules', () => {
    const values = ['123', '1234']
    values.forEach(value => {
      expect(rule({ value })).toEqual(undefined)
    })
  })
})
