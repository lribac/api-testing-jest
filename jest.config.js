module.exports = {
  testMatch: [
    '<rootDir>/tests/*.test.js',
  ],
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules',
  ],
  reporters: [
    'default',
    [
      'jest-stare',
      {
        resultDir: 'reports/jest-stare',
        reportTitle: 'Test Results',
        additionalResultsProcessors: [
          'jest-junit',
        ],
      },
    ],
    // ['jest-junit', {outputDirectory: 'reports', outputName: 'report.xml'}]
  ],
  testTimeout: 200000,
};
