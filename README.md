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
import { green /* black, red, yellow, blue, magenta, cyan, white */ } from '@js-bits/log-in-color';

console.log(green('this message is green')); // this message is green
```

or

```javascript
console.log(green`Now: ${new Date()}`); // Now: Sun Jun 27 2021 11:38:15 GMT-0400 (Eastern Daylight Time)
```

## Notes

- Requires [ECMAScript modules](https://nodejs.org/api/esm.html) to be enabled in Node.js environment. Otherwise, compile into a CommonJS module.
