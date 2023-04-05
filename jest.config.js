const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./apps/facix"
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/apps/facix/test/setupTests.ts"],
  // setupFiles: ["jest-canvas-mock"],
  // testSequencer: "<rootDir>/jestTestSequencer.js",
  resetMocks: true,
  modulePaths: ["<rootDir>/apps/facix"],
  collectCoverage: false,
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!(ky|@react-hook/throttle|@react-hook/latest)/)"],
  transform: {
    "^.+\\.po$": "<rootDir>/__mocks__/gettextFileTransformer.js",
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic"
            }
          }
        }
      }
    ]
  }
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);

module.exports = customJestConfig;
