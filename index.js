module.exports = {
  "extends": "stylelint-config-standard-scss",
  "plugins": [
    "stylelint-no-unsupported-browser-features"
  ],
  // additonal rules based mainly on
  // https://github.com/stylelint/stylelint-config-standard#suggested-additions
  "rules": {
    // plugins

    // only emit a warning as partially supported features should be taken care of
    // (e.g. vendor prefixed) with postprocessing tools like autoprefixer
    // thus the lint process should not error
    "plugin/no-unsupported-browser-features": [true, { "severity": "warning" }],

    // general
    "no-missing-end-of-source-newline": null,

    // vendor prefixes
    // we expect all projects to use autoprefixer
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,

    // selector specificity and nesting
    "selector-max-specificity": "0,3,0",
    "selector-max-compound-selectors": 4,
    "max-nesting-depth": [
      3, {
        "ignoreAtRules": [
          "include",
          "media"
        ]
      }
    ],

    // quotes
    "font-family-name-quotes": "always-unless-keyword",
    "function-url-quotes": "always",

    // declarations
    "declaration-no-important": true,
    "declaration-property-unit-allowed-list": {
      "font-size": ["px", "em"]
    }
  }
};