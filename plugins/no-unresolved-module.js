/**
 * @see [stylelint-no-unresolved-module](https://github.com/niksy/stylelint-no-unresolved-module)
 */
module.exports = {
  plugins: ['stylelint-no-unresolved-module'],

  rules: {
    'plugin/no-unresolved-module': {
      alias: {},

      modules: [
        'node_modules',
        'public',
        'src/assets',
        'src/public',
        'src/static',
      ],
    },
  },
};
