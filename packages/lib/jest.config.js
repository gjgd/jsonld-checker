module.exports = {
  "globals": {
    TextEncoder: require('util').TextEncoder,
    TextDecoder: require('util').TextDecoder
  },
  "coverageThreshold": {
    "global": {
      "branches": 38,
      "functions": 58,
      "lines": 53,
      "statements": 52
    }
  },
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json"],
  "transform": {
    "^.+\\.(ts|tsx)$": "./node_modules/ts-jest"
  },
  "testMatch": ["**/*.(spec|test).(ts|js|tsx|jsx)"],
  "testEnvironment": "node",
  "testPathIgnorePatterns": ["/dist/"]
}
