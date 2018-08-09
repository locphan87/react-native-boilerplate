module.exports = {
  verbose: true,
  preset: 'jest-expo',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/flow-typed/'],
  moduleFileExtensions: ['js'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)(spec|test).js'],
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
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-navigation|glamorous-native|@expo|expo)'
  ]
}
