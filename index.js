const parsers = require("prettierx/src/language-js/parser-babylon").parsers;

const options = require("prettierx/src/language-js/options");

const estree = require("prettierx/src/language-js/printer-estree");

module.exports = {
  parsers: {
    "prettierx-babel": {
      ...parsers.babel,
      astFormat: "prettierx-estree"
    }
  },
  options,
  printers: {
    "prettierx-estree": estree
  }
};
