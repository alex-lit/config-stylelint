/* eslint-disable unicorn/no-null */
module.exports = {
  extends: [
    'stylelint-config-standard',
    ...[
      './plugins/a11y',
      './plugins/declaration-block-no-ignored-properties',
      './plugins/high-performance-animation',
      './plugins/order',
      './plugins/scss',
      './plugins/prettier',
    ].map((config) => require.resolve(config)),
  ],

  ignoreFiles: [
    '.*/**',
    'build/**',
    'dist/**',
    'docs/**',
    'node_modules/**',
    'storybook-*/**',
  ],

  rules: {
    'at-rule-disallowed-list': ['debug'],

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
      },
    ],

    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-hex': true,
    'color-no-invalid-hex': true,
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'function-url-quotes': 'always',
    indentation: null,

    'max-nesting-depth': [
      6,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],

    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: [] }],
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': 'always',
    'property-no-unknown': [true, { ignoreProperties: [] }],
    'property-no-vendor-prefix': true,

    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [],
      },
    ],

    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
      {
        message:
          'Selector should be written as BEM "block__element--modifier--value" (selector-class-pattern)',
      },
    ],

    'selector-combinator-disallowed-list': ['>>>', '/deep/'],
    'selector-max-compound-selectors': 6,
    'selector-max-id': 0,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-disallowed-list': ['shadow'],

    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep', 'file-selector-button'] },
    ],

    'selector-type-no-unknown': [true, { ignoreTypes: ['ymaps'] }],
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': null,
    'value-no-vendor-prefix': true,
  },
};
