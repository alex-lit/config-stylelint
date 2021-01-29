module.exports = {
  ignoreFiles: [
    '.*/**',
    'build/**',
    'dist/**',
    'docs/**',
    'node_modules/**',
    'storybook-*/**',
  ],

  extends: [
    'stylelint-config-standard',
    require.resolve('./plugins/scss.js'),
    require.resolve('./plugins/order.js'),
    require.resolve('./plugins/prettier.js'),
  ],

  rules: {
    'at-rule-no-vendor-prefix': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for', 'each', 'extend', 'include', 'at-root', 'mixin'],
      },
    ],
    'at-rule-empty-line-before': ['always', { except: 'first-nested' }],
    'block-no-empty': null,
    'color-no-hex': true,
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'function-url-quotes': 'always',
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': 'always',
    'media-feature-name-no-unknown': [
      true,
      { ignoreMediaFeatureNames: ['prefers-reduced-motion'] },
    ],
    'property-no-unknown': [true, { ignoreProperties: ['content-visibility'] }],
    'rule-empty-line-before': ['always', { except: 'first-nested' }],
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['range-thumb', 'v-deep'] },
    ],
    'selector-type-no-unknown': [true, { ignoreTypes: ['ymaps'] }],
    'string-no-newline': null,
    indentation: null,
  },
};
