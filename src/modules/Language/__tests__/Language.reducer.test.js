import reducer from '../Language.reducer'

describe('module Language', () => {
  describe('reducer setLanguage', () => {
    test('should change language', () => {
      const actual = reducer(undefined, {
        type: 'SET_LANGUAGE',
        payload: 'vi'
      })
      expect(actual).toEqual('vi')
    })
  })
})
