const KEBAB_CASE_PATTERN = '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$';

/**
 * @see [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
 */
module.exports = {
  plugins: ['stylelint-scss'],

  rules: {
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': KEBAB_CASE_PATTERN,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-pattern': KEBAB_CASE_PATTERN,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: [] }],
    'scss/declaration-nested-properties': 'never',
    'scss/dollar-variable-pattern': KEBAB_CASE_PATTERN,
    'scss/function-color-relative': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/percent-placeholder-pattern': KEBAB_CASE_PATTERN,
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': [
      true,
      { ignoreKeywords: [] },
    ],
  },
};
