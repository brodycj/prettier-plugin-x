const parsers = require("prettierx/src/language-js/parser-babel").parsers;

const { typescript } = require("prettier/parser-typescript").parsers;

const {
  options: jsOptions,
  printers: { estree }
} = require("prettierx/src/language-js");

const htmlParsers = require("prettierx/src/language-html/parser-html").parsers;

const {
  options,
  options: htmlOptions,
  printers: { html }
} = require("prettierx/src/language-html");

// XXX TBD  ???:
const p2 = (p) => {
  return {
    ...p,
    parse: (t, pp, o) => {
      // console.log({ ...o, parser: "html" });
      // WORKAROUND DOES NOT WORK, should patch prettierX instead
      return p.parse(t, pp, { ...o, parser: "html" });
    }
  };
};

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
    },
    "x-html": { ...p2(htmlParsers.html), astFormat: "x-html" }
  },
  options: { ...htmlOptions, ...jsOptions },
  printers: {
    "x-estree": estree,
    "x-html": html
  }
};
