import { Platform } from 'react-native'

import { isDEV, isPROD, isIOS, isAndroid } from '../platform.util'

describe('utils - common', () => {
  describe('isDEV', () => {
    test('should return TRUE on dev mode', () => {
      process.env.NODE_ENV = 'development'
      expect(isDEV()).toBe(true)
    })
    test('should return FALSE on production mode', () => {
      process.env.NODE_ENV = 'production'
      expect(isDEV()).toBe(false)
    })
  })

  describe('isPROD', () => {
    test('should return TRUE on production mode', () => {
      process.env.NODE_ENV = 'production'
      expect(isPROD()).toBe(true)
    })
    test('should return FALSE on dev mode', () => {
      process.env.NODE_ENV = 'development'
      expect(isPROD()).toBe(false)
    })
  })

  describe('isIOS', () => {
    test('should return TRUE on iOS', () => {
      Platform.OS = 'ios'
      expect(isIOS()).toBe(true)
    })
    test('should return FALSE on Android', () => {
      Platform.OS = 'android'
      expect(isIOS()).toBe(false)
    })
  })

  describe('isAndroid', () => {
    test('should return TRUE on Android', () => {
      Platform.OS = 'android'
      expect(isAndroid()).toBe(true)
    })
    test('should return FALSE on iOS', () => {
      Platform.OS = 'ios'
      expect(isAndroid()).toBe(false)
    })
  })
})
