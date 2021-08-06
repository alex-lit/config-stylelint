/**
 * @see [stylelint-csstree-validator](https://github.com/csstree/stylelint-validator)
 */

module.exports = {
  plugins: ['stylelint-csstree-validator'],

  rules: {
    'csstree/validator': {
      ignoreValue: 'scale-color',

      properties: {
        'content-visibility': 'visible | auto | hidden', // webkit
      },
    },
  },
};
