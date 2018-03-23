import { insertIf } from './common.util'

describe('common.util', () => {
  describe('insertIf', () => {
    test('should add elements', () => {
      const actual = insertIf(true, 1, 2)
      const expected = [1, 2]
      expect(actual).toEqual(expected)
    })
    test('should not add elements', () => {
      const actual = [...insertIf(true, 0), ...insertIf(false, 1, 2)]
      const expected = [0]
      expect(actual).toEqual(expected)
    })
  })
})
