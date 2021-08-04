/**
 * @see [stylelint-use-logical-spec](https://github.com/Jordan-Hall/stylelint-use-logical-spec)
 */
module.exports = {
  plugins: ['stylelint-use-logical-spec'],

  rules: {
    'liberty/use-logical-spec': [
      'always',

      /**
       * Fixes for mobile safari < 14.7
       *
       * @see [caniuse](https://caniuse.com/mdn-css_properties_inset-block-start)
       */
      { except: ['top', 'right', 'bottom', 'left'] },
    ],
  },
};
