/* eslint-disable sonarjs/no-duplicate-string */

/**
 * @see [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
 */
module.exports = {
  plugins: ['stylelint-scss'],

  rules: {
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [],
      },
    ],
    'scss/declaration-nested-properties': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/function-color-relative': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': null,
  },
};
