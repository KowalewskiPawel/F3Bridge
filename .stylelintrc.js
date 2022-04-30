module.exports = {
  extends: [],
  ignoreFiles: ["build/**"],
  plugins: [
    "stylelint-high-performance-animation",
    // https://github.com/AndyOGo/stylelint-declaration-strict-value#user-content-usage
    "stylelint-declaration-strict-value",
    "stylelint-no-unsupported-browser-features",
  ],
  rules: {
    // https://github.com/stylelint/stylelint/issues/4713
    "declaration-bang-space-before": null,
    "block-no-empty": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["extends", "tailwind"],
      },
    ],
    "plugin/no-low-performance-animation-properties": true,
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
    "scale-unlimited/declaration-strict-value": [],
    "selector-max-id": 1,
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: ["/is([A-Z]?[a-z]*)*/"],
      },
    ],
  },
};
