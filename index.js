const COLOR_CODES = {
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37
};

// https://habr.com/ru/post/492366/

const methods = {};

for (let colorName in COLOR_CODES) {
  methods[colorName] = (colorCode => {
    return message => `\x1b[${colorCode}m${message}\x1b[0m`;
  })(COLOR_CODES[colorName]);
}

module.exports = methods;
