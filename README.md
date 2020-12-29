# prettier-plugin-x

![license: MIT or Apache-2.0](https://img.shields.io/badge/license-MIT%20or%20Apache%202.0-green)

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
prettier --config ./sample-prettierx-prettierrc --plugin=. --parser=x-babel --check sample.js
```

## Thanks and credits

- Thanks to https://github.com/prettier/plugin-php for an easy-to-understand Prettier plugin,
  which helped scaffold this Prettier plugin.
