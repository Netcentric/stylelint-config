# @netcentric/stylelint-config

[![Version](https://img.shields.io/npm/v/@netcentric/stylelint-config.svg)](https://npmjs.org/package/@netcentric/stylelint-config)
[![Build Status](https://github.com/netcentric/stylelint-config/workflows/CI/badge.svg?branch=main)](https://github.com/netcentric/stylelint-config/actions)
[![CodeQL Analysis](https://github.com/netcentric/stylelint-config/workflows/CodeQL/badge.svg?branch=main)](https://github.com/netcentric/stylelint-config/actions)
[![semver: semantic-release](https://img.shields.io/badge/semver-semantic--release-blue.svg)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

If StyleLint is new to you, you might want to check out  [what it does](https://stylelint.io/) and [how to configure it](https://stylelint.io/user-guide/configure/).

## Install

```bash
npm install --save-dev @netcentric/stylelint-config stylelint
```

## Setup

### .stylelintrc

Create or update your `.stylelintrc` file in the folder of your project's `package.json`:

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
  severity: `warning`,
  browsers,
  ignore: [
    // "css-hyphens" is only partially supported by Chrome and Android Browser 56
    // autoprefixer does the job
    `css-hyphens`,
    // we expect full CSS grid support on target browsers nowadays
    `multicolumn`,
    // most of the values are well supported, just clip is partially suppported by Safari
    'css-overflow',
    // most of the values are well supported, just old versions of Firefox and Safari have a few issues with transparent colors
    'css-gradients',
    // following rules need to be disabled if using SCSS, since the CSS nesting is going to be converted to compatible CSS by the build tools
    'css-nesting',
    'css-when-else',
    // it might give false positives when using together with SCSS functions, such as column-gap: scss-function();
    'column-gap',
  ]
}],
```

### @stylistic/stylelint-plugin

[@stylistic/stylelint-plugin](https://www.npmjs.com/package/@stylistic/stylelint-plugin)
