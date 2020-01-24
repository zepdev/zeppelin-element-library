<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <img alt="Zeppelin" src="https://s3.eu-central-1.amazonaws.com/com.zeppelin.zds.assets/zel/ZEP_Logo_rgb_DINlang.png" width="200"/>
</p>
<h1 align="center">
  Zeppelin Element Library
</h1>

<span align="center">

[![CircleCI](https://circleci.com/gh/zepdev/zeppelin-element-library.svg?style=svg&circle-token=8459cd0c2f3c88c2cfde73dc36634f2a4d21f982)](https://circleci.com/gh/zepdev/zeppelin-element-library)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=alert_status)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=bugs)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=code_smells)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=coverage)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=ncloc)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=security_rating)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=sqale_index)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=zepdev_zeppelin-element-library&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=zepdev_zeppelin-element-library)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![semantic-release](https://img.shields.io/npm/v/zeppelin-element-library.svg)](https://www.npmjs.com/package/zeppelin-element-library)
[![Bundlephobia min zipped size](https://img.shields.io/bundlephobia/minzip/zeppelin-element-library.svg)](https://bundlephobia.com/result?p=zeppelin-element-library)

</span>

The Zeppelin Design System contains individual styles and components to build intuitive designs. These designs follow the same universal principles.

The Zeppelin Element Library gives developers the basic styles, scripts and assets for building Zeppelin products.

## How to install

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install zeppelin-element-library --save
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
yarn add zeppelin-element-library
```

## How to use

Use either ESM or CommonJS to use the JavaScript

### Import

Import the JavaScript as ECMAScript Module

```javascript
import ZEL from 'zeppelin-element-library';
```

### Require

Require the JavaScript as CommonJS Module

```javascript
const ZEL = require('zeppelin-element-library');
```

### Use provided Styles

When using Webpack, you can include the provided styles into a JavaScript file.

```javascript
import 'zeppelin-element-library/zel.css';
```

### Initialize Script

To get the JavaScript running, initialize ZEL after the DOM has loaded.
Place the following script at the bottom of your body element.

```javascript
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    ZEL.init();
  });
</script>
```

## Development for publishing on npm

There are a few main parts to this project for use in the npm package;

1. Sketch Files - Update sketch files at src/assets/sketches/ and 'yarn bundle' will move it to the folder assets/sketch/ for you automatically.

2. Fonts - Update fonts at src/assets/fonts and 'yarn bundle' will move it to the folder assets/fonts/ for you automatically.

3. Logos - Update logos at src/assets/logos (please add them as a zip file) and 'yarn bundle' will move it to the folder assets/logos/ for you automatically.

4. Icons - Update icons at src/assets/icons and 'yarn bundle' will zip and move it to the folder assets/icons/ for you automatically.

5. zel.css - please do not touch this file - This file is made by 'yarn build' and then automatically moved renamed and moved to the main folder by 'yarn bundle' for npm packaging.

6. guidelines.json - Update this file at src/assets/themes/guidelines.json and it will automatically be moved to the main folder by 'yarn bundle' for npm packings. Please do not touch the guidelines.json file in the root folder. If you make any changes made to src/assets/themes/guideslines.json please make sure to run 'yarn convert' to convert this file to a guidelines.scss file that can be used to make the zeppelin element library css.

Note on 'yarn convert': Nested variables can be accessed as 'map-deep-get(\$guideliness, "breakpoints", "xs")' (see \_variables.scss).

7. bundle - This folder contains all complied javascript for ZEL. It is made automatically by 'yarn build' and then renamed and moved by 'yarn bundle' for npm packaging.
