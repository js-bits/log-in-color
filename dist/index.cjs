'use strict';

const COLOR_CODES = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
};

// let's invert COLOR_CODES object
const CODED_COLORS = Object.entries(COLOR_CODES).reduce((acc, [key, value]) => {
  acc[String(value)] = key;
  return acc;
}, {});

const colorize =
  colorCode =>
  (strings, ...keys) => {
    let str;
    if (typeof strings === 'string') {
      str = strings;
    } else {
      str = `${keys.reduce((acc, key, index) => `${acc}${strings[index]}${key}`, '')}${strings[strings.length - 1]}`;
    }
    return `\x1b[${colorCode}m${str}\x1b[0m`;
  };

const methods = Object.keys(COLOR_CODES).reduce((acc, colorName) => {
  acc[colorName] = colorize(COLOR_CODES[colorName]);
  return acc;
}, {});

const css = str => {
  const styles = [];
  // eslint-disable-next-line no-control-regex
  const message = str.replace(/\x1b\[(\d+)m/g, (match, code) => {
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
