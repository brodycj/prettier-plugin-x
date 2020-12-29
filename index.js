const parsers = require("prettierx/src/language-js/parser-babel").parsers;

const options = require("prettierx/src/language-js/options");

const estree = require("prettierx/src/language-js/printer-estree");

module.exports = {
  parsers: {
    "x-babel": {
      ...parsers.babel,
      astFormat: "x-estree"
    }
  },
  options,
  printers: {
    "x-estree": estree
  }
};
