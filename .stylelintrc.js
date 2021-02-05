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
    require.resolve('./plugins/a11y'),
    require.resolve('./plugins/declaration-block-no-ignored-properties'),
    require.resolve('./plugins/high-performance-animation'),
    require.resolve('./plugins/order'),
    require.resolve('./plugins/scss'),
    require.resolve('./plugins/prettier'),
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
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': 'always',
    'max-nesting-depth': [
      6,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: [] }],
    'property-no-vendor-prefix': true,
    'property-no-unknown': [true, { ignoreProperties: [] }],
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
          'Selector should be written in BEM "block-name__element-name--modifier--value" (selector-class-pattern)',
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
