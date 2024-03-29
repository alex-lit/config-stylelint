/**
 * @see [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)
 */
module.exports = {
  plugins: ['stylelint-no-unsupported-browser-features'],

  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignorePartialSupport: true,
        severity: 'warning',
      },
    ],
  },
};
