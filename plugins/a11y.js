/**
 * @see [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y)
 */
module.exports = {
  plugins: ['stylelint-a11y'],

  rules: {
    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-obsolete-element': true,
    'a11y/no-outline-none': true,
    'a11y/no-text-align-justify': true,
    'a11y/selector-pseudo-class-focus': true,
  },
};
