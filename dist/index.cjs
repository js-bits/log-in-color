'use strict';

const COLOR_CODES = /** @type {const} */ ({
  black: '30',
  red: '31',
  green: '32',
  yellow: '33',
  blue: '34',
  magenta: '35',
  cyan: '36',
  white: '37',
});

/**
 * @typedef {typeof COLOR_CODES[keyof typeof COLOR_CODES] | '0'} ColorCodes
 */

/**
 * @typedef {keyof typeof COLOR_CODES} ColorNames
 */

/**
 * @type {{ [Key in ColorNames as typeof COLOR_CODES[Key]]: Key; }}
 */
// @ts-ignore
const CODED_COLORS = Object.entries(COLOR_CODES).reduce((acc, [key, value]) => {
  // @ts-ignore
  acc[value] = key;
  return acc;
}, {});

const colorize =
  (/** @type {ColorCodes} */ colorCode) =>
  (/** @type {string | string[]} */ strings, /** @type {string[]} */ ...keys) => {
    let str;
    if (typeof strings === 'string') {
      str = strings;
    } else {
      str = `${keys.reduce((acc, key, index) => `${acc}${strings[index]}${key}`, '')}${strings[strings.length - 1]}`;
    }
    return `\x1b[${colorCode}m${str}\x1b[0m`;
  };

/**
 * @type {{ [Key in ColorNames]: (strings: string | TemplateStringsArray, ...rest:unknown[]) => string; }}
 */
// @ts-ignore
const methods = Object.keys(COLOR_CODES).reduce((acc, /** @type {ColorNames} */ colorName) => {
  // @ts-ignore
  acc[colorName] = colorize(COLOR_CODES[colorName]);
  return acc;
}, {});

const css = (/** @type {string} */ str) => {
  /** @type {string[]} */
  const styles = [];
  // eslint-disable-next-line no-control-regex
  const message = str.replace(/\x1b\[(\d+)m/g, (match, /** @type {ColorCodes} */ code) => {
    styles.push(`color: ${code === '0' ? 'normal' : CODED_COLORS[code]};`);
    return '%c';
  });
  return [message, ...styles];
};

const { black, red, green, yellow, blue, magenta, cyan, white } = methods;

// https://habr.com/ru/post/492366/

exports.black = black;
exports.blue = blue;
exports.css = css;
exports.cyan = cyan;
exports.green = green;
exports.magenta = magenta;
exports.red = red;
exports.white = white;
exports.yellow = yellow;
