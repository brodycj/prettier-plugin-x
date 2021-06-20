const { parsers } = require("prettierx/src/language-js/parser-babel");

const {
  parsers: { typescript }
} = require("prettier/parser-typescript");

const {
  options,
  printers: { estree }
} = require("prettierx/src/language-js");

module.exports = {
  parsers: {
    "x-babel": {
      ...parsers.babel,
      astFormat: "x-estree"
    },
    "x-babel-ts": {
      ...parsers["babel-ts"],
      astFormat: "x-estree"
    },
    "x-typescript": {
      ...typescript,
      astFormat: "x-estree"
    }
  },
  options,
  printers: {
    "x-estree": estree
  }
};
