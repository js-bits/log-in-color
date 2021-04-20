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

const colorize = colorCode => message => `\x1b[${colorCode}m${message}\x1b[0m`;

const methods = Object.keys(COLOR_CODES).reduce((acc, colorName) => {
  acc[colorName] = colorize(COLOR_CODES[colorName]);
  return acc;
}, {});

export const { black, red, green, yellow, blue, magenta, cyan, white } = methods;

// https://habr.com/ru/post/492366/
