/**
 * @see [stylelint-at-rule-no-children](https://github.com/adityavm/stylelint-at-rule-no-children)
 */
module.exports = {
  plugins: ['stylelint-at-rule-no-children'],

  rules: {
    'aditayvm/at-rule-no-children': [
      'always',
      { ignore: [], severity: 'error' },
    ],
  },
};
