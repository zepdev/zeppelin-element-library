# Zeppelin Element Library

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
import ZEL from "zeppelin-element-library";
```

### Require

Require the JavaScript as CommonJS Module

```javascript
const ZEL = require("zeppelin-element-library");
```

### Use provided Styles


When using Webpack, you can include the provided styles into a JavaScript file.


```javascript
import "zeppelin-element-library/bundle/zeppelin-element-library.css";
```

