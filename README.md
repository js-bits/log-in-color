# Colorful console logging

Add colors to your console output

## Installation

Install with npm:

```
npm install @js-bits/log-in-color
```

Install with yarn:

```
yarn add @js-bits/log-in-color
```

Import where you need it:

```javascript
import { green /* black, red, yellow, blue, magenta, cyan, white */, css } from '@js-bits/log-in-color';
```

or require for CommonJS:

```javascript
const { green /* black, red, yellow, blue, magenta, cyan, white */, css } = require('@js-bits/log-in-color');
```

## How to use

```javascript
console.log(green('this message is green')); // this message is green
```

or

```javascript
console.log(green`Now: ${new Date()}`); // Now: Sun Jun 27 2021 11:38:15 GMT-0400 (Eastern Daylight Time)
```

or

```javascript
console.log(`RGB: ${red`red`}; ${green`green`}; ${blue`blue`}.`); // RGB: red; green; blue.
```

The approach above works in Chrome, Edge and Node.js.
All browsers should support a little different format:

```javascript
console.log(...css(`RGB: ${red`red`}; ${green`green`}; ${blue`blue`}.`)); // RGB: red; green; blue.
```

Use provided `css()` function with a spread operator to convert colored string into a list of CSS styles.
