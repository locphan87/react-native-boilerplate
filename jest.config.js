module.exports = {
  verbose: true,
  preset: 'jest-expo',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/flow-typed/'
  ],
  moduleFileExtensions: ['js'],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)(spec|test).js'
  ],
  setupFiles: ['<rootDir>/tests/setup.js'],
  coveragePathIgnorePatterns: [
    '(style|story).js',
    './tests/setup.js',
    './src/themes/',
    'index.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
  timers: 'fake',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|glamorous-native|@expo|expo)'
  ]
}
