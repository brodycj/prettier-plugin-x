const {
  parsers: { typescript }
} = require("prettier/parser-typescript");

const {
  parsers,
  options,
  printers: { estree }
} = require("x-formatter").languages[0];

module.exports = {
  parsers: {
    "x-babel": {
      ...parsers.babel,
      astFormat: "x-estree"
    },
    "x-babel-flow": {
      ...parsers["babel-flow"],
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
