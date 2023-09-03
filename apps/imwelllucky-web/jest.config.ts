const jestReactConfig = require("test-config/jest-next");

/** @type {import('jest').Config} */
const customJestConfig = {
  rootDir: "./",
  automock: true,
  bail: 5,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  notifyMode: "failure-change",
  notify: true,
  testEnvironment: "jsdom",
  fakeTimers: {
    "enableGlobally": false
  },
  ...jestReactConfig,
  displayName: "I'm WellluckY Application Tests",
};

module.exports = customJestConfig;
