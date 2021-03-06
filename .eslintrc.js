module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": "off",
    quotes: ["error", "single"],
    semi: 2,
    "no-console": 0,
    "no-debugger": 2
  }
};
