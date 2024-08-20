/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/node_modules/'],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'mjs', 'cjs'],
  // The root directory that Jest should scan for tests and modules within
  rootDir: '../../',
  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>src/**/?(*.)+(spec|test).[jt]s?(x)'],
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],
  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  watchPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>config/jest/mappers/identity-obj-proxy-esm.js',
    '\\.(svg)$': '<rootDir>config/jest/mappers/jest-empty-component.tsx',
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
  },
  globals: {
    __IS_DEV__: true,
    __API_URL__: '/',
    __PROJECT__: 'jest',
  },

  // Whether to use watchman for file crawling
  // watchman: true,
};

export default config;
