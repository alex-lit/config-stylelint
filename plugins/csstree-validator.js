/**
 * @see [stylelint-csstree-validator](https://github.com/csstree/stylelint-validator)
 */

module.exports = {
  plugins: ['stylelint-csstree-validator'],

  rules: {
    'csstree/validator': {
      ignore: ['v-deep', 'v-global', 'v-slotted'],

      ignoreValue: /^(clamp|color|map|math|max|min|quote|unquote|v-bind)/,

      properties: {
        'content-visibility': 'visible | auto | hidden', // webkit
        'font-display': 'auto | block | swap | fallback | optional', // experimental
      },
    },
  },
};
