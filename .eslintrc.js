module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['jest', 'import'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['info', 'time', 'timeEnd', 'warn', 'error']
      }
    ],
    'comma-dangle': [2, 'never'],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
        optionalDependencies: false
      }
    ],
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 1,
    'jest/no-identical-title': 2
  }
};
