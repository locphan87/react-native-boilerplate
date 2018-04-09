import { isPromise } from 'ramda-adjunct'

import { insertIf, match, delay } from '../common.util'

describe('common.util', () => {
  describe('delay', async () => {
    const fn = jest.fn()
    const actual = await delay()
    fn()
    expect(isPromise(actual)).toBeTruthy()
    expect(fn).toBeCalled()
  })

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

  describe('match', () => {
    const cases = {
      A: 1,
      B: 2,
      C: 3,
      _: 0
    }
    test('should return a matching case', () => {
      const actual = match('B')(cases)
      const expected = 2
      expect(actual).toBe(expected)
    })
    test('should return the default case', () => {
      const actual = match('Z')(cases)
      const expected = 0
      expect(actual).toBe(expected)
    })
    test('should throw an error on missing case', () => {
      const actual = () =>
        match('Z')({
          ...cases,
          _: undefined
        })
      expect(actual).toThrow()
    })
  })
})
