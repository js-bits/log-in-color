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

## How to use

```javascript
import { green /* black, red, yellow, blue, magenta, cyan, white */, css } from '@js-bits/log-in-color';

console.log(green('this message is green')); // this message is green
```

or

```javascript
console.log(green`Now: ${new Date()}`); // Now: Sun Jun 27 2021 11:38:15 GMT-0400 (Eastern Daylight Time)
```

The approach above work in Chrome and Node.js.
All browsers should support a little different format:

```javascript
console.log(...css(`RGB: ${red`red`}; ${green`green`}; ${blue`blue`}.`); // RGB: red; green; blue.
```

Use provided `css()` function with a spread operator to convert colored string into a list of CSS styles.

## Notes

- Requires [ECMAScript modules](https://nodejs.org/api/esm.html) to be enabled in Node.js environment. Otherwise, compile into a CommonJS module.
