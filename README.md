# StyleLint Configuration

## Installation

```sh
npm i @alexlit/config-stylelint -D
```

## Connection

```js
// .stylelintrc.js
module.exports = {
  extends: [
    '@alexlit/config-stylelint',

    /* optional */
    '@alexlit/config-stylelint/plugins/optional/use-logical',
  ],

  ignoreFiles: [
    ...require('@alexlit/config-stylelint/.stylelintrc').ignoreFiles,
  ],
};
```
