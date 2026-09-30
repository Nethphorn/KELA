module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/test/setup.ts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/playwright-tests/',
    '/cypress-tests/',
    '/dist/',
  ],
}
