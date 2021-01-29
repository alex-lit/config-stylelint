module.exports = {
  plugins: ['stylelint-order'],

  extends: ['stylelint-config-idiomatic-order'],

  rules: {
    'order/order': [
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
      },
      'dollar-variables',
      'custom-properties',
      'declarations',
      'rules',
      {
        type: 'at-rule',
        name: 'at-root',
      },
      'at-rules',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'at-rule',
        name: 'keyframes',
      },
    ],
  },
};
