// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const jestReactConfig = require("test-config/jest-react");

/** @type {import('jest').Config} */
const customJestConfig = {
  rootDir: "./",
  ...jestReactConfig,
  displayName: "Application Package Tests",
};

module.exports = customJestConfig;
