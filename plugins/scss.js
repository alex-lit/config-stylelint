module.exports = {
  plugins: ['stylelint-scss'],

  rules: {
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [],
      },
    ],
    'scss/declaration-nested-properties': 'never',
    'scss/function-color-relative': true,
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': null,
  },
};
