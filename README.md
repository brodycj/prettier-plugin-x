# prettier-plugin-x

[![LICENSE](https://img.shields.io/npm/l/prettier-plugin-x?color=green&style=flat-square)](./LICENSE.md)
[![npm package](https://img.shields.io/npm/v/prettier-plugin-x?color=blue&style=flat-square)](https://www.npmjs.com/package/prettier-plugin-x)

Use Babel or TypeScript parser with enhanced estree printer from `prettierx`,
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

Note that for TypeScript this plugin uses the TypeScript parser that is bundled with stock Prettier.

## Sample usage

```
prettier --config ./sample-prettierx-prettierrc --parser=x-babel --check sample.js
```

with `babel-ts` parser:

```
prettier --config ./sample-prettierx-prettierrc --parser=x-babel-ts --check sample.js
```

or with the TypeScript parser:

```
prettier --config ./sample-prettierx-prettierrc --parser=x-typescript --check sample.js
```

Note that the `--plugin` option is not needed if this plugin is installed as a peer of Prettier.

## Thanks and credits

- Thanks to https://github.com/prettier/plugin-php for an easy-to-understand Prettier plugin,
  which helped with the initial structure of this Prettier plugin.
