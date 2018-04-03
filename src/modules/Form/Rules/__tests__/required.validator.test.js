import required from '../required.validator'

describe('Form Rules required', () => {
  const rule = required('required')
  test('should fail with invalid rules', () => {
    const values = ['', null, undefined]
    values.forEach(value => {
      expect(rule({ value })).toEqual('required')
    })
  })
  test('should pass with valid rules', () => {
    const values = ['abc', 'a', ' ']
    values.forEach(value => {
      expect(rule({ value })).toEqual(undefined)
    })
  })
})
