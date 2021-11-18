# @netcentric/stylelint-config

[![Version](https://img.shields.io/npm/v/@netcentric/stylelint-config.svg)](https://npmjs.org/package/@netcentric/stylelint-config)
[![Build Status](https://github.com/netcentric/stylelint-config/workflows/CI/badge.svg?branch=main)](https://github.com/netcentric/stylelint-config/actions)
[![CodeQL Analysis](https://github.com/netcentric/stylelint-config/workflows/CodeQL/badge.svg?branch=main)](https://github.com/netcentric/stylelint-config/actions)
[![semver: semantic-release](https://img.shields.io/badge/semver-semantic--release-blue.svg)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

If StyleLint is new to you, you might want ot check out  [what it does](https://stylelint.io/) and [how to configure it](https://stylelint.io/user-guide/configure/).

## Setup

### .stylelintrc

Create a `.stylelintrc` file in the folder of your project's `package.json`:

```json
{
  "extends": "@netcentric/stylelint-config"
}
```

Please do not add it as a property `stylelint` within the `package.json` as it is not supported by all essential IDEs (e.g. Webstorm wouldn't pick it).

Note that Stylelint is different to eslint as it uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) to load the configuration file. Biggest difference: the first config file it finds is used, and it will stop looking for further files in upper folders. That means, you only can define one `.stylelintrc`  file, preferably on the same folder as your project's `package.json`.

## IDE integration

Most IDEs should have an [integration for Stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins).

## Build system integration

In your `package.json`

```json
  "dependencies": {
    "@netcentric/stylelint-config": "^4.0.0",
    "stylelint": "~14.1.0"
  },
  "scripts": {
    "lint": "stylelint "\"<root-css-files>/**/*.css\""
  }
```

Make sure you do not accidently lint files you are not interested that are out of scope for your build; e.g. files within the `node_modules` folder.

## Overwriting rules

Please stick to the Netcentric rules as they are battle tested and were created to form a company wide basis for CSS code quality. If there's a very specific case you want to deactivate a rule for consider using [StyleLint inline comments](http://stylelint.io/user-guide/configuration/#turning-rules-off-from-within-your-css) instead.

If there's a rule you consider as outdated or simply wrong please contact the package's maintainer or file an issue in JIRA (`bugs` in `package.json`) or create a PR on the package's repository (`repository` in `package.json`).

If you have a very project specific case where adding or deactivating a rule makes perfectly sense, you can overwrite any rule using the `rules` property.

## I don't understand why I violated rule X

You can find a description of all rules on the [Stylelint Homepage](http://stylelint.io/user-guide/rules/).

## Plugins

### no-unsupported-browser-features

[https://github.com/ismay/stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features)

When working with this plugin we've found some browser issues that might help you save some time investigating:

```javascript
"plugin/no-unsupported-browser-features": [true, {
  severity: `error`,
  browsers,
  ignore: [
    // only issue for IE (according to http://caniuse.com/#feat=font-unicode-range)
    // seems to that it "ignores the unicode-range if the U is lowercase e.g 'u+0061'"
    `font-unicode-range`,
    // autoprefixer does the job
    `flexbox`,
    // "css-hyphens" is only partially supported by Chrome and Android Browser 56
    // autoprefixer does the job
    `css-hyphens`,
    // http://caniuse.com/#feat=viewport-units
    // only the `vmax` rule is not supported in IE11, Edge
    `viewport-units`,
    // we expect full CSS grid support on target browsers once the project launches
    `multicolumn`,
    // IE11, Edge14 partially support this http://caniuse.com/#feat=outline
    `outline`
  ]
}],
```
