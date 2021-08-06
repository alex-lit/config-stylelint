/**
 * @see [stylelint-csstree-validator](https://github.com/csstree/stylelint-validator)
 */

module.exports = {
  plugins: ['stylelint-csstree-validator'],

  rules: {
    'csstree/validator': {
      ignoreValue: '(scale-color|clamp)',

      properties: {
        'content-visibility': 'visible | auto | hidden', // webkit
        'font-display': 'auto | block | swap | fallback | optional', // experimental
      },
    },
  },
};
