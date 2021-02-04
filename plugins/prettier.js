/**
 * @see [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
 */
module.exports = {
  plugins: ['stylelint-prettier'],

  extends: ['stylelint-config-prettier'],

  rules: {
    'prettier/prettier': true,
  },
};
