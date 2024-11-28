/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },

  // ensures testing is only conducted on ts files inside of __tests__ folder
  testMatch: [
    '**/__tests__/**/*.test.(ts)'
  ],
};