import type { Config } from "jest";

const config: Config = {
  rootDir: "./",
  resetMocks: true,
  transformIgnorePatterns: [
    "node_modules/(?!(swiper|ssr-window|dom7)/)",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  collectCoverageFrom: ["**/src/**/*.{js,ts,jsx,tsx}"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {},
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "test-config/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "test-config/__mocks__/fileMock.js",
  },
  displayName: "im-resources test",
};

export default config;
