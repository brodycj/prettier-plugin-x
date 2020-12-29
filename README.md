# prettier-plugin-x

![license: MIT](https://img.shields.io/badge/license-MIT-green)

Use Babel JavaScript parser with enhanced estree printer from `prettierx`,
all in a Prettier plugin.

With options from `prettierx` to support much closer parity with "Standard JS",
for example:

```js
function * a () {}
```

with the following config:

```json
{
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true
}
```

## Sample usage

```
prettier --config ./sample-prettierx-prettierrc --plugin=. --parser=prettierx-babel --check sample.js
```

## Thanks and credits

- Thanks to https://github.com/prettier/plugin-php for an easy-to-understand Prettier plugin,
  which helped scaffold this Prettier plugin.
