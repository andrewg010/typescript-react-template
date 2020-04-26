module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // node is an option here
  setupFiles: ['<rootDir>/test/enzyme.config.ts'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  }
}
