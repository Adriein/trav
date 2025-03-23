/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
    rootDir: ".",
    testRegex: "spec.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    collectCoverageFrom: [
        "**/*.(t|j)s"
    ],
    coverageDirectory: "../coverage",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@src/(.*)$": '<rootDir>/src/$1',
        "^@loan/(.*)$": '<rootDir>/src/Loan/$1',
        "^@shared/(.*)$": '<rootDir>/src/Shared/$1',
        "^@test/(.*)$": '<rootDir>/test/$1',
    },
}