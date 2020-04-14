module.exports = {
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      stringifyContentPathRegex: '\\.html?$',
      tsConfig: 'tsconfig.spec.json',
      preserveSymlinks: true
    },
    navigator: {
      userAgent: 'node.js'
    }
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: ['**/__tests__/**/*.+(ts|js)?(x)', '**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
    '^assets/(.*)': '<rootDir>/src/assets/$1',
    '^environments/(.*)': '<rootDir>/src/environments/$1'
  },
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-preset-angular/build/AngularSnapshotSerializer.js',
    '<rootDir>/node_modules/jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts']
};
